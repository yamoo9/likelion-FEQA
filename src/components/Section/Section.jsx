import { string, node } from 'prop-types';

function Section({
  id,
  headline,
  bgColor = 'bg-slate-950',
  textColor = 'text-slate-50',
  children,
}) {
  return (
    <section className={`h-[50vh] ${bgColor} ${textColor} p-5`}>
      <h3 id={id}>{headline}</h3>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: string.isRequired,
  headline: string.isRequired,
  bgColor: string,
  textColor: string,
  children: node,
};

export default Section;
