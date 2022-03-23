import '@gmcotta/design-system-core/dist/components/icon';
import '@gmcotta/design-system-core/dist/components/heading';
import '@gmcotta/design-system-core/dist/components/paragraph';
import { CardContent } from '@gmcotta/design-system-team-lp/dist/card-content';

import iconShapes from '@gmcotta/meiuca-assets/dist/assets/icons/shapes';

import './cards.styles.scss';

export default function AppCards() {
  return (
    <section className="section-cards">
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-start-1 md:col-start-2 col-span-10">
          <div className="cards-title">
            <dsc-icon icon={iconShapes} size="lg"></dsc-icon>
            <dsc-heading level="h2" size="xl">
              Alguns <br /> bons cards
            </dsc-heading>
            <dsc-paragraph>Esses são o que chamamos de Team Components</dsc-paragraph>
          </div>
        </div>
      </div>
      <div className="cards-container container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
        <div className="col-span-12 md:col-span-3">
          <CardContent
            tagContent="Tag Highlight"
            headingContent="Heading"
            paragraphContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />
        </div>
      </div>
    </section>
  )
}