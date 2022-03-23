import { ReactComponent as Polygon } from './Polygon.svg';
import { ReactComponent as Title } from './Title.svg';
import { ReactComponent as Tag } from './Tag.svg';

import './octagon-banner.styles.scss';

export default function OctagonBanner() {
  return (
    <div className="octagon-banner">
      <Polygon className="svg-polygon" />
      <Title className="svg-title" />
      <Tag className="svg-tag" />
    </div>
  )
}