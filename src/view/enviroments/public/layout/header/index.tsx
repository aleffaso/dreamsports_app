import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import * as S from './styles';

config.autoAddCss = false;
library.add(faEnvelope, faPhone, faInstagram, faFacebook, faTwitter, faLinkedin);

export const Header = () => {
  return (
    <S.Wrapper>
      <nav>
        <S.Container>
          <S.Row>
            <div>
              <FontAwesomeIcon icon="envelope" size="1x" />
              <a href="mailto:ravitejakolla29@gmail.com"> info@company.com</a>
              <FontAwesomeIcon icon="phone" size="1x" />
              <a href="tel:010-020-0340"> 010-020-0340</a>
            </div>
            <div>
              <a href="mailto:ravitejakolla29@gmail.com">
                <FontAwesomeIcon icon={['fab', 'facebook']} size="1x" />
              </a>
              <a>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" />
              </a>
              <a href="mailto:ravitejakolla29@gmail.com">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" />
              </a>
              <a>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" />
              </a>
            </div>
          </S.Row>
        </S.Container>
      </nav>
    </S.Wrapper>
  );
};
