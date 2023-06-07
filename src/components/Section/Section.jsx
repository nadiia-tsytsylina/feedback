import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionBox>
      {title && <Title>{title}</Title>}
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
