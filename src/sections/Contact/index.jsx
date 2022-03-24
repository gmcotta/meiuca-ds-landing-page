import { useEffect, useState } from 'react';
import '@gmcotta/design-system-core/dist/components/icon';
import '@gmcotta/design-system-core/dist/components/heading';
import '@gmcotta/design-system-core/dist/components/paragraph';
import '@gmcotta/design-system-core/dist/components/input';
import '@gmcotta/design-system-core/dist/components/select';
import '@gmcotta/design-system-core/dist/components/textarea';
import '@gmcotta/design-system-core/dist/components/button';
import iconShapes from '@gmcotta/meiuca-assets/dist/assets/icons/shapes';

import { ReactComponent as FeedbackSVG } from './Feedback.svg';

import './contact.styles.scss';

export default function AppContact() {
  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setShowFeedback(true);
      }, 3000);
    }
  }, [loading]);

  useEffect(() => {
    document
      .querySelector('[aria-label="submit-form"]')
      .addEventListener('dscClick', () => setLoading(true));
  }, []);

  return (
    <section className="section-contact">
      {!showFeedback ? (
        <>
          <div className="section-contact__title">
            <dsc-icon icon={iconShapes} size="lg"></dsc-icon>
            <dsc-heading level="h2" size="lg">
              Contato
            </dsc-heading>
            <dsc-paragraph>
              Curtiu? Bora conversar.
            </dsc-paragraph>
          </div>
          <div className="section-contact__form">
            <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
              <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-3">
                <dsc-input-text
                  label="Nome"
                  placeholder="Digite seu nome aqui..."
                ></dsc-input-text>
              </div>
              <div className="col-span-12 md:col-span-3">
                <dsc-input-text
                  label="Email"
                  placeholder="Digite seu email aqui..."
                ></dsc-input-text>
              </div>
            </div>

            <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
              <div className="col-start-1 col-span-12 md:col-start-4 md:col-span-3">
                <dsc-input-text
                  label="Empresa"
                  placeholder="Digite o nome da sua empresa..."
                ></dsc-input-text>
              </div>
              <div className="col-span-12 md:col-span-3">
                <dsc-select
                  label="Motivo do contato"
                  placeholder="Digite seu email aqui..."
                >
                  <option value="1">Tenho interesse</option>
                  <option value="2">Apenas um feedback</option>
                  <option value="3">Outros</option>
                </dsc-select>
              </div>
            </div>

            <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
              <div className="col-start-1 md:col-start-4 col-span-12 md:col-span-6">
                <dsc-textarea
                  label="Mensagem"
                  placeholder="Digite aqui sua mensagem..."
                >
                </dsc-textarea>
              </div>
            </div>
            <div className="container grid grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
              <div className="col-start-7 md:col-start-4 col-span-6 section-contact__form--action">
                {loading ? (
                  <dsc-button loading size="lg"></dsc-button>
                ) : (
                  <dsc-button size="lg" aria-label="submit-form">
                    Button Primary
                  </dsc-button>
                )}
              </div>
            </div>
          </div>
        </>
      ):(
        <div className='section-feedback'>
          <dsc-heading level="h6" size="lg">
            Boooa!
          </dsc-heading>
          <dsc-paragraph>
            Deu tudo certo. Já já chega no seu inbox. Deve demorar uns minutinhos, tá?
          </dsc-paragraph>
          <FeedbackSVG />
        </div>
      )}
    </section>
  )
}