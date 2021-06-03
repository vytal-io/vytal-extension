// Initialize storage values
chrome.storage.sync.set({ oldRedirect: false });

chrome.storage.onChanged.addListener((changes) => {
  if ('oldRedirect' in changes) {
    if (changes.oldRedirect.newValue) {
      (chrome as any).declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ['ruleset_1'],
      });
    } else {
      (chrome as any).declarativeNetRequest.updateEnabledRulesets({
        disableRulesetIds: ['ruleset_1'],
      });
    }
  }
});
