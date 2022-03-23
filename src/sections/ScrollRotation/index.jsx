import { ScrollRotate } from 'react-scroll-rotate';

import '@gmcotta/design-system-core/dist/components/heading';
import '@gmcotta/design-system-core/dist/components/paragraph';

import VectorToRotate from '../../components/VectorToRotate';

import './scroll-rotation.styles.scss';

export default function AppScrollRotation() {
  return (
    <section className="scroll-rotation-section">
      <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div className="col-start-1 col-span-12 md:col-span-10 md:col-start-2">
          <div className="scroll-rotation-section__content">
            <dsc-heading level="h6" size="sm">
              Falta um form, né?
            </dsc-heading>
            <ScrollRotate method={"perc"} loops={1}>
              <VectorToRotate />
            </ScrollRotate>
            <dsc-paragraph>
              Desce mais um pouquinho!
            </dsc-paragraph>
          </div>
        </div>
      </div>
    </section>
  )
}