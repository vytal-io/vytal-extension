import { useContext } from 'react';
import DataContext from './Context';
import './PredictionBlock.css';
import Block from './Block';
import PredictionTableRow from './PredictionTableRow';

const PredictionBlock = () => {
  const { prediction, mapUrl } = useContext(DataContext);

  return (
    <Block>
      <h1>Location Prediction</h1>
      <img
        className="mapImg"
        src={mapUrl}
        alt="Map of location prediction"
      />
      <div className="tableWrap">
        <table>
          <tbody>
            <PredictionTableRow title="Country" value={prediction.country} percent={prediction.countryPercent} />
            <PredictionTableRow title="City" value={prediction.city} percent={prediction.cityPercent} />
          </tbody>
        </table>
      </div>
      <p>
        Accuracy of the location prediction is dependant on how much
        authentic info you&apos;re exposing. To learn about how to hide your location visit the{' '}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          alt="Link to GitHub repo"
          href="https://github.com/z0ccc/LocateJS#locatejs"
        >
          GitHub repo
        </a>
        .
      </p>
    </Block>
  );
};

export default PredictionBlock;
