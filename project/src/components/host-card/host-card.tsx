import { Host } from '../../types/host';

type HostCardProps = {
  host: Host;
};

function HostCard({host}: HostCardProps): JSX.Element {
  const {hostAvatar, hostName, hostStatus, descriptionTextFirst, descriptionTextSecond} = host;
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={hostAvatar} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {hostName}
        </span>
        <span className="property__user-status">
          {hostStatus}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {descriptionTextFirst}
        </p>
        <p className="property__text">
          {descriptionTextSecond}
        </p>
      </div>
    </div>
  );
}

export default HostCard;
