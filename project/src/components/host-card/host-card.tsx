import { Host } from '../../types/offers';

type HostCardProps = {
  host: Host;
};

function HostCard({host}: HostCardProps): JSX.Element {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={host.hostAvatar} width="74" height="74" alt="Host avatar"/>
        </div>
        <span className="property__user-name">
          {host.hostName}
        </span>
        <span className="property__user-status">
          {host.hostStatus}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {host.descriptionTextFirst}
        </p>
        <p className="property__text">
          {host.descriptionTextSecond}
        </p>
      </div>
    </div>
  );
}

export default HostCard;
