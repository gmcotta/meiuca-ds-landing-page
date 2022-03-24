import '@gmcotta/design-system-core/dist/components/icon';
import '@gmcotta/design-system-core/dist/components/link';
import iconGithub from '@gmcotta/meiuca-assets/dist/assets/icons/github';

import './footer.styles.scss';

export default function AppFooter() {
  return (
    <footer className="section-footer">
      <dsc-icon icon={iconGithub} size="lg"></dsc-icon>
      <dsc-link 
        href="https://github.com/gmcotta/meiuca-ds-landing-page" 
        target="_blank"
        rel="noreferrer noopener"
      >
        Repositório do projeto
      </dsc-link>
    </footer>
  )
}
