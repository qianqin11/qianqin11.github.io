import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Video,
} from 'lucide-react';

type Publication = {
  authors: string;
  title: string;
  venue?: string;
  href: string;
  resource?: string;
  code?: string;
};

const publications: Record<string, Publication[]> = {
  '2026': [
    {
      authors: 'W. Fu, Q. Qin, G. Wang',
      title: 'Spectral gap for the binary fixed-margin swap chain',
      href: 'https://arxiv.org/abs/2606.22636',
    },
    {
      authors: 'Y. Kwon, G. L. Jones, Q. Qin',
      title: 'Solidarity of spectral gaps for component-wise Markov chains',
      href: 'https://arxiv.org/abs/2604.23229',
    },
    {
      authors: 'Y. Kwon, Q. Qin, G. Wang, Y. Wei',
      title: 'A phase transition in sampling from Restricted Boltzmann Machines',
      venue: 'Annals of Applied Probability',
      href: 'https://arxiv.org/abs/2410.08423',
    },
  ],
  '2025': [
    {
      authors: 'J. Cui, Q. Qin',
      title:
        'Convergence analysis of data augmentation algorithms in Bayesian lasso models with log-concave likelihoods',
      href: 'https://arxiv.org/abs/2512.20041',
    },
    {
      authors: 'Q. Qin',
      title: 'On spectral gap decomposition for Markov chains',
      href: 'https://arxiv.org/abs/2504.01247',
    },
    {
      authors: 'Q. Qin',
      title:
        'Geometric ergodicity of trans-dimensional Markov chain Monte Carlo algorithms',
      venue: 'Journal of the American Statistical Association',
      href: 'https://arxiv.org/abs/2308.00139',
      code: 'https://github.com/qianqin11/geometric-ergodicity-of-trans-dimensional-mcmc-reproducibility',
    },
    {
      authors: 'Q. Qin, N. Ju, G. Wang',
      title: 'Spectral gap bounds for reversible hybrid Gibbs chains',
      venue: 'Annals of Statistics',
      href: 'https://arxiv.org/abs/2312.12782',
    },
  ],
  '2024': [
    {
      authors: 'S. Wang, S. Chakraborty, Q. Qin, R. Bai',
      title: 'Neural-g: A deep learning framework for mixing density estimation',
      href: 'https://arxiv.org/abs/2406.05986',
    },
    {
      authors: 'H. Li, Q. Qin',
      title:
        'Multivariate strong invariance principle and uncertainty assessment for time in-homogeneous cyclic MCMC samplers',
      href: 'https://arxiv.org/abs/2405.10194',
    },
    {
      authors: 'Q. Qin',
      title:
        'Analysis of two-component Gibbs samplers using the theory of two projections',
      venue: 'Annals of Applied Probability',
      href: 'https://arxiv.org/abs/2201.12500',
    },
    {
      authors: 'H. Li, Q. Qin, G. L. Jones',
      title:
        'Convergence analysis of data augmentation algorithms for Bayesian robust multivariate linear regression with incomplete data',
      venue: 'Journal of Multivariate Analysis',
      href: 'https://arxiv.org/abs/2212.01712',
    },
    {
      authors: 'Q. Qin, G. Wang',
      title:
        'Spectral telescope: Convergence rate bounds for random-scan Gibbs samplers based on a hierarchical structure',
      venue: 'Annals of Applied Probability',
      href: 'https://arxiv.org/abs/2208.11299',
    },
  ],
  '2022': [
    {
      authors: 'Q. Qin, J. P. Hobert',
      title:
        'Geometric convergence bounds for Markov chains in Wasserstein distance based on generalized drift and contraction conditions',
      venue:
        'Annales de l’Institut Henri Poincaré (B) Probabilités et Statistiques',
      href: 'https://arxiv.org/abs/1902.02964',
    },
    {
      authors: 'G. L. Jones, Q. Qin',
      title: 'Markov chain Monte Carlo in Practice',
      venue: 'Annual Review of Statistics and Its Application',
      href: 'https://www.annualreviews.org/doi/full/10.1146/annurev-statistics-040220-090158',
      resource: 'Article',
    },
    {
      authors: 'Q. Qin, G. L. Jones',
      title: 'Convergence rates of two-component MCMC samplers',
      venue: 'Bernoulli',
      href: 'https://arxiv.org/abs/2006.14801',
    },
    {
      authors: 'Q. Qin, J. P. Hobert',
      title:
        'Wasserstein-based methods for convergence complexity analysis of MCMC with applications',
      venue: 'Annals of Applied Probability',
      href: 'https://arxiv.org/abs/1810.08826',
    },
  ],
  '2021': [
    {
      authors: 'Q. Qin, J. P. Hobert',
      title:
        'On the limitations of single-step drift and minorization in Markov chain convergence analysis',
      venue: 'Annals of Applied Probability',
      href: 'https://arxiv.org/abs/2003.09555',
    },
  ],
  '2019': [
    {
      authors: 'Q. Qin, J. P. Hobert',
      title: 'Estimating the spectral gap of a trace-class Markov operator',
      venue: 'Electronic Journal of Statistics',
      href: 'https://arxiv.org/abs/1704.00850',
      code: 'https://github.com/qianqin11/Code-Estimating-the-spectral-gap-of-a-trace-class-Markov-operator',
    },
    {
      authors: 'Q. Qin, J. P. Hobert',
      title:
        "Convergence complexity analysis of Albert and Chib's algorithm for Bayesian probit regression",
      venue: 'Annals of Statistics',
      href: 'https://arxiv.org/abs/1712.08867',
    },
  ],
  '2018': [
    {
      authors: 'J. P. Hobert, Y. J. Jung, K. Khare, Q. Qin',
      title:
        'Convergence analysis of MCMC algorithms for Bayesian multivariate linear regression with non-Gaussian errors',
      venue: 'Scandinavian Journal of Statistics',
      href: 'https://users.stat.ufl.edu/~jhobert/papers/hjkq.pdf',
      resource: 'Article',
    },
    {
      authors: 'Q. Qin, J. P. Hobert',
      title:
        'Trace-class Monte Carlo Markov chains for Bayesian multivariate linear regression with non-Gaussian errors',
      venue: 'Journal of Multivariate Analysis',
      href: 'https://arxiv.org/abs/1602.00136',
    },
  ],
};

const externalProps = { target: '_blank', rel: 'noreferrer' } as const;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Qian Qin — home">
          <span>Qian Qin</span>
          <span aria-hidden="true">秦芊</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Statistics · Markov chains · MCMC</p>
            <h1>
              Qian Qin <span>秦芊</span>
            </h1>
            <p className="hero-lede">
              Associate Professor in the School of Statistics at the University
              of Minnesota.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#publications">
                View research <ArrowDownRight aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href="https://drive.google.com/file/d/1grs32o__vNUo8c1249JXazpP_RroebbN/view?usp=drive_link"
                {...externalProps}
              >
                <FileText aria-hidden="true" /> Curriculum vitae
              </a>
              <a className="text-link" href="mailto:qin@umn.edu">
                <Mail aria-hidden="true" /> qin@umn.edu
              </a>
            </div>
          </div>

          <figure className="portrait-wrap">
            <div className="portrait-accent" aria-hidden="true">
              π(x)P(x, y) = π(y)P(y, x)
            </div>
            <img
              src="/qian-qin.jpg"
              alt="Portrait of Qian Qin"
              width="720"
              height="900"
            />
            <figcaption>
              <MapPin aria-hidden="true" /> 357 Ford Hall · Minneapolis, MN
            </figcaption>
          </figure>
        </section>

        <section className="section-grid" id="about">
          <div>
            <p className="section-number">01 / About</p>
          </div>
          <div className="about-copy">
            <h2>Studying how complex algorithms find their way to equilibrium.</h2>
            <p>
              I work on convergence analysis of Markov chains and the theory of
              Markov chain Monte Carlo. My research develops rigorous,
              practically useful tools for understanding modern sampling
              algorithms.
            </p>
            <a
              className="inline-link"
              href="https://cla.umn.edu/statistics"
              {...externalProps}
            >
              School of Statistics <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="research-preview" id="research">
          <p className="section-number">02 / Research</p>
          <div className="topic-card">
            <span>Core area</span>
            <h2>Convergence analysis for Markov chains</h2>
            <p>
              Spectral gaps, geometric ergodicity, Wasserstein methods, and the
              convergence complexity of MCMC algorithms.
            </p>
          </div>
          <div className="topic-card topic-card-dark">
            <span>Current focus</span>
            <h2>Markov chain Monte Carlo</h2>
            <p>
              Theory and methodology for Gibbs samplers, data augmentation, and
              high-dimensional stochastic systems.
            </p>
          </div>
        </section>

        <section className="publications-section" id="publications">
          <div className="publications-heading">
            <div>
              <p className="section-number">03 / Publications</p>
              <h2>Articles</h2>
            </div>
            <p>
              A full list of research articles, from recent work on spectral
              gaps to foundational convergence analysis. For an accessible
              introduction, read my{' '}
              <a
                href="https://drive.google.com/file/d/1HZhvUVeDwuQnSycnb4rquPxH8u-jB2jX/view?usp=drive_link"
                {...externalProps}
              >
                book chapter <ArrowUpRight aria-hidden="true" />
              </a>
              .
            </p>
          </div>

          <div className="publication-years">
            {Object.entries(publications).map(([year, papers]) => (
              <section className="year-group" key={year} aria-labelledby={`year-${year}`}>
                <h3 id={`year-${year}`}>{year}</h3>
                <ol>
                  {papers.map((paper, index) => (
                    <li key={paper.title}>
                      <span className="paper-index" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="paper-copy">
                        <p className="paper-authors">{paper.authors}</p>
                        <a className="paper-title" href={paper.href} {...externalProps}>
                          {paper.title} <ArrowUpRight aria-hidden="true" />
                        </a>
                        {paper.venue && <p className="paper-venue">{paper.venue}</p>}
                      </div>
                      <div className="paper-links">
                        <a href={paper.href} {...externalProps}>
                          {paper.resource ?? 'arXiv'}
                        </a>
                        {paper.code && (
                          <a href={paper.code} {...externalProps}>
                            Code
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </section>

        <section className="profile-section" id="profile">
          <div className="profile-heading">
            <p className="section-number">04 / Academic profile</p>
            <h2>Education & mentorship</h2>
          </div>
          <div className="profile-grid">
            <article className="profile-card">
              <GraduationCap aria-hidden="true" />
              <p className="card-label">Education</p>
              <div className="credential">
                <span>2019</span>
                <p>
                  <strong>Ph.D. in Statistics</strong>
                  University of Florida
                </p>
              </div>
              <div className="credential">
                <span>2014</span>
                <p>
                  <strong>B.S. in Physics</strong>
                  Peking University
                </p>
              </div>
            </article>
            <article className="profile-card profile-card-accent">
              <BookOpen aria-hidden="true" />
              <p className="card-label">Ph.D. student</p>
              <h3>Haoxiang Li</h3>
              <p>
                Graduated in 2024. Jointly supervised with Galin L. Jones.
              </p>
              <p className="dissertation">
                <span>Dissertation</span>
                Uncertainty Assessment and Convergence Analysis for Markov Chain
                Monte Carlo Algorithms.
              </p>
            </article>
          </div>
        </section>

        <section className="links-section" id="links">
          <p className="section-number">05 / Elsewhere</p>
          <div className="link-list">
            <a href="https://github.com/qianqin11" {...externalProps}>
              <Code2 aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=hx9r6UgAAAAJ&hl=en"
              {...externalProps}
            >
              <GraduationCap aria-hidden="true" />
              <span>Google Scholar</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://sites.google.com/view/monte-carlo-seminar/"
              {...externalProps}
            >
              <BookOpen aria-hidden="true" />
              <span>Monte Carlo Seminar</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@MonteCarloSeminar" {...externalProps}>
              <Video aria-hidden="true" />
              <span>Seminar recordings</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <footer id="contact">
          <div className="footer-copy">
            <p>Questions, collaborations, or seminar invitations?</p>
            <a href="mailto:qin@umn.edu">
              qin@umn.edu <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="footer-meta">
            <p>
              Qian Qin · Associate Professor
              <br />
              School of Statistics · University of Minnesota
            </p>
            <a href="#top">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
