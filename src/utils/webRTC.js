const getWebRTC = (setWebRTCData) => {
  if (navigator.getUserMedia) {
    const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;

    // compatibility for firefox and chrome
    let RTCPeerConnection = window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection;

    // bypass naive webrtc blocking using an iframe
    if (!RTCPeerConnection) {
      const frame = document.createElement('iframe');
      document.body.appendChild(frame);
      frame.style.display = 'none';
      const win = frame.contentWindow;
      RTCPeerConnection = win.RTCPeerConnection
            || win.mozRTCPeerConnection
            || win.webkitRTCPeerConnection;
    }

    // minimal requirements for data connection
    const mediaConstraints = {
      optional: [{ RtpDataChannels: true }]
    };

    const servers = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };

    // construct a new RTCPeerConnection
    const pc = new RTCPeerConnection(servers, mediaConstraints);

    let ips = [];
    const ipsData = [];

    // listen for candidate events
    pc.onicecandidate = (ice) => {
    // skip non-candidate events
      if (ice.candidate) {
        const ip = ipRegex.exec(ice.candidate.candidate);
        if (ip !== null && ip.length > 1) {
          ips.push(ip[1]);
        }
      }
    };

    // create a bogus data channel
    pc.createDataChannel('');

    // create an offer sdp
    pc.createOffer((result) => {
    // trigger the stun server request
      pc.setLocalDescription(result, () => {}, () => {});
    }, () => {});

    const waitForElement = async () => {
      if (pc.localDescription) {
        const lines = pc.localDescription.sdp.split('\n');
        lines.forEach((line) => {
          if (line.indexOf('a=candidate:') === 0) {
            const ip = ipRegex.exec(line);
            if (ip !== null && ip.length > 1) {
              ips.push(ip[1]);
            }
          }
        });
        ips = [...new Set(ips)];
        for (let i = 0; i < ips.length; i++) {
          ipsData.push(fetch(`https://api.locatejs.com/ip/${ips[i]}`)
            .then((response) => response.json())
            .then((json) => json));
        }
        setWebRTCData(await Promise.all(ipsData));
      } else {
        setTimeout(waitForElement, 1000);
      }
    };

    waitForElement();
  } else {
    setWebRTCData([]);
  }
};

export default getWebRTC;
