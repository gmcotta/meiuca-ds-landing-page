import '@gmcotta/design-system-core/dist/components/tag';
import '@gmcotta/design-system-core/dist/components/heading';
import '@gmcotta/design-system-core/dist/components/paragraph';

import OctagonBanner from '../../components/OctagonBanner';
import Arrow from '../../components/Arrow';

import './home-banner.styles.scss';

export default function AppHomeBanner() {
  return (
    <>
      <div className="home-banner">
        <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-2 col-span-12 lg:col-start-2 col-span-10">
            <div className="home-banner-content">
              <dsc-tag>Teste do DS</dsc-tag>
              <dsc-heading level="h1" size="display">
                Bora testar esse Design System?
              </dsc-heading>
              <dsc-paragraph>
                Essa é uma landing page para simular a construção de um produto a partir de um DS, do curso Design System in Code.
              </dsc-paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="home-brand-bg">
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
          <div className="col-start-1 md:col-start-2 col-span-10">
            <div className="home-brand-bg-content">
              <OctagonBanner className="octagon-banner" />
              <Arrow className="svg-arrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}