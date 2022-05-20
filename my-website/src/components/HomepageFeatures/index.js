import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_note_list_re_r4u9.svg').default,
    description: (
      <>
       Heexy, is Really simple search Engine, with minimalistic Design, is not Too hard for use.
      </>
    ),
  },
  {
    title: '100% Privacy',
    Svg: require('@site/static/img/undraw_personal_settings_re_i6w4.svg').default,
    description: (
      <>
        We are dont Track you or selling your data to other Companys, We are make your Data Private, We are dont Need your Location or <code>IP Adress</code>
        Stop use Other Engines with Trackers Use Heexy.
      </>
    ),
  },
  {
    title: 'Working Without JavaScript',
    Svg: require('@site/static/img/undraw_static_assets_rpm6.svg').default,
    description: (
      <>
        Yeeah, Heexy working Without Javascript, you can use Heexy in TOR or some like this, Heexy is working very fast and without JavaScript!
      </>
    ),
  },
  {
    title: '100% Privacy',
    Svg: require('@site/static/img/undraw_personal_settings_re_i6w4.svg').default,
    description: (
      <>
        We are dont Track you or selling your data to other Companys, We are make your Data Private, We are dont Need your Location or <code>IP Adress</code>
        Stop use Other Engines with Trackers Use Heexy.
      </>
    ),
  },
    {
    title: '100% Privacy',
    Svg: require('@site/static/img/undraw_personal_settings_re_i6w4.svg').default,
    description: (
      <>
        We are dont Track you or selling your data to other Companys, We are make your Data Private, We are dont Need your Location or <code>IP Adress</code>
        Stop use Other Engines with Trackers Use Heexy.
      </>
    ),
  },
  {
    title: '100% Privacy',
    Svg: require('@site/static/img/undraw_personal_settings_re_i6w4.svg').default,
    description: (
      <>
        We are dont Track you or selling your data to other Companys, We are make your Data Private, We are dont Need your Location or <code>IP Adress</code>
        Stop use Other Engines with Trackers Use Heexy.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
