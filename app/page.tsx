const externalProps = { target: '_blank', rel: 'noreferrer' } as const;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#basic-info">
          Qian Qin | 秦芊
        </a>
        <nav aria-label="Menu">
          <a href="#basic-info">Basic Info</a>
          <a href="#research">Research</a>
          <a href="#links">Links</a>
        </nav>
      </header>

      <div id="content">
        <section className="basic-info" id="basic-info" aria-labelledby="name">
          <div className="identity-panel">
            <p className="section-label">Basic Info</p>
            <h1 id="name">Qian Qin | 秦芊</h1>
            <div className="identity-details">
              <p>Associate Professor</p>
              <p>
                <a href="https://cla.umn.edu/statistics" {...externalProps}>
                  School of Statistics
                </a>
              </p>
              <p>
                <a href="https://twin-cities.umn.edu/" {...externalProps}>
                  University of Minnesota
                </a>
              </p>
              <p>Email: qqin at umn dot edu</p>
            </div>
            <p className="cv-link">
              My{' '}
              <a
                href="https://drive.google.com/file/d/1grs32o__vNUo8c1249JXazpP_RroebbN/view?usp=drive_link"
                {...externalProps}
              >
                CV
              </a>
              .
            </p>
          </div>

          <figure className="portrait">
            <img
              src={`${import.meta.env.BASE_URL}qian-qin.jpg`}
              alt="Qian Qin"
              width="720"
              height="900"
            />
          </figure>
        </section>

        <section className="background-grid" aria-label="Basic Info">
          <article>
            <h2>Education</h2>
            <div className="background-copy">
              <p>Ph.D. in Statistics, University of Florida, 2019</p>
              <p>B.S. in Physics, Peking University, 2014</p>
            </div>
          </article>

          <article>
            <h2>Research Interests</h2>
            <div className="background-copy">
              <p>Convergence analysis for Markov chains</p>
              <p>Markov chain Monte Carlo</p>
            </div>
          </article>

          <article className="student-card">
            <h2>Ph.D. Students</h2>
            <div className="background-copy">
              <p>
                Haoxiang Li, graduated in 2024, supervised jointly with Galin L.
                Jones.
              </p>
              <p>
                Dissertation: Uncertainty Assessment and Convergence Analysis
                for Markov Chain Monte Carlo Algorithms.
              </p>
            </div>
          </article>
        </section>

        <section
          className="research-section"
          id="research"
          aria-labelledby="research-title"
        >
          <div className="research-intro">
            <h2 id="research-title">Research</h2>
            <p>
              I work on convergence analysis of Markov chains and the theory of
              Markov chain Monte Carlo (MCMC). If you are interested in
              convergence analysis for MCMC, you can take a look at{' '}
              <a
                href="https://drive.google.com/file/d/1HZhvUVeDwuQnSycnb4rquPxH8u-jB2jX/view?usp=drive_link"
                {...externalProps}
              >
                this book chapter
              </a>{' '}
              I wrote.
            </p>
          </div>

          <div className="articles" aria-labelledby="articles-title">
            <h2 id="articles-title">Articles</h2>

            <article>
              <p>
                W. Fu, Q. Qin,{' '}
                <a href="https://guanyangwang.github.io/" {...externalProps}>
                  G. Wang
                </a>{' '}
                (2026). Spectral gap for the binary fixed-margin swap chain.{' '}
                <a href="https://arxiv.org/abs/2606.22636" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Y. Kwon,{' '}
                <a href="https://galinj.github.io/" {...externalProps}>
                  G. L. Jones
                </a>
                , Q. Qin (2026). Solidarity of spectral gaps for component-wise
                Markov chains.{' '}
                <a href="https://arxiv.org/abs/2604.23229" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Y. Kwon, Q. Qin,{' '}
                <a href="https://guanyangwang.github.io/" {...externalProps}>
                  G. Wang
                </a>
                , Y. Wei (2026). A phase transition in sampling from Restricted
                Boltzmann Machines, <em>Annals of Applied Probability</em>.{' '}
                <a href="https://arxiv.org/abs/2410.08423" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                J. Cui, Q. Qin (2025). Convergence analysis of data augmentation
                algorithms in Bayesian lasso models with log-concave
                likelihoods.{' '}
                <a href="https://arxiv.org/abs/2512.20041" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin (2025). On spectral gap decomposition for Markov chains.{' '}
                <a href="https://arxiv.org/abs/2504.01247" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin (2025). Geometric ergodicity of trans-dimensional Markov
                chain Monte Carlo algorithms,{' '}
                <em>Journal of the American Statistical Association</em>.{' '}
                <a href="https://arxiv.org/abs/2308.00139" {...externalProps}>
                  arXiv
                </a>
                .{' '}
                <a
                  href="https://github.com/qianqin11/geometric-ergodicity-of-trans-dimensional-mcmc-reproducibility"
                  {...externalProps}
                >
                  Code
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a href="https://nianqiaoju.github.io/" {...externalProps}>
                  N. Ju
                </a>
                ,{' '}
                <a href="https://guanyangwang.github.io/" {...externalProps}>
                  G. Wang
                </a>{' '}
                (2025). Spectral gap bounds for reversible hybrid Gibbs chains,{' '}
                <em>Annals of Statistics</em>.{' '}
                <a href="https://arxiv.org/abs/2312.12782" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                <a href="https://github.com/shijiew97" {...externalProps}>
                  S. Wang
                </a>
                ,{' '}
                <a
                  href="https://www.saptarshichakraborty.net/"
                  {...externalProps}
                >
                  S. Chakraborty
                </a>
                , Q. Qin,{' '}
                <a href="https://raybai.net/" {...externalProps}>
                  R. Bai
                </a>{' '}
                (2024). Neural-g: A deep learning framework for mixing density
                estimation.{' '}
                <a href="https://arxiv.org/abs/2406.05986" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                H. Li, Q. Qin (2024). Multivariate strong invariance principle
                and uncertainty assessment for time in-homogeneous cyclic MCMC
                samplers.{' '}
                <a href="https://arxiv.org/abs/2405.10194" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin (2024). Analysis of two-component Gibbs samplers using
                the theory of two projections,{' '}
                <em>Annals of Applied Probability</em>.{' '}
                <a href="https://arxiv.org/abs/2201.12500" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                H. Li, Q. Qin,{' '}
                <a href="https://galinj.github.io/" {...externalProps}>
                  G. L. Jones
                </a>{' '}
                (2024). Convergence analysis of data augmentation algorithms for
                Bayesian robust multivariate linear regression with incomplete
                data, <em>Journal of Multivariate Analysis</em>.{' '}
                <a href="https://arxiv.org/abs/2212.01712" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a href="https://guanyangwang.github.io/" {...externalProps}>
                  G. Wang
                </a>{' '}
                (2024). Spectral telescope: Convergence rate bounds for
                random-scan Gibbs samplers based on a hierarchical structure,{' '}
                <em>Annals of Applied Probability</em>.{' '}
                <a href="https://arxiv.org/abs/2208.11299" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ&view_op=list_works&sortby=pubdate"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>{' '}
                (2022). Geometric convergence bounds for Markov chains in
                Wasserstein distance based on generalized drift and contraction
                conditions,{' '}
                <em>
                  Annales de l’Institut Henri Poincaré (B) Probabilités et
                  Statistiques
                </em>
                .{' '}
                <a href="https://arxiv.org/abs/1902.02964" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                <a href="https://galinj.github.io/" {...externalProps}>
                  G. L. Jones
                </a>
                , Q. Qin (2022). Markov chain Monte Carlo in Practice,{' '}
                <em>Annual Review of Statistics and Its Application</em>.{' '}
                <a
                  href="https://www.annualreviews.org/doi/full/10.1146/annurev-statistics-040220-090158"
                  {...externalProps}
                >
                  Link
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a href="https://galinj.github.io/" {...externalProps}>
                  G. L. Jones
                </a>{' '}
                (2022). Convergence rates of two-component MCMC samplers,{' '}
                <em>Bernoulli</em>.{' '}
                <a href="https://arxiv.org/abs/2006.14801" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ&view_op=list_works&sortby=pubdate"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>{' '}
                (2022). Wasserstein-based methods for convergence complexity
                analysis of MCMC with applications,{' '}
                <em>Annals of Applied Probability</em>.{' '}
                <a href="https://arxiv.org/abs/1810.08826" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>{' '}
                (2021). On the limitations of single-step drift and minorization
                in Markov chain convergence analysis,{' '}
                <em>Annals of Applied Probability</em>.{' '}
                <a href="https://arxiv.org/abs/2003.09555" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>{' '}
                (2019). Estimating the spectral gap of a trace-class Markov
                operator, <em>Electronic Journal of Statistics</em>.{' '}
                <a href="https://arxiv.org/abs/1704.00850" {...externalProps}>
                  arXiv
                </a>
                .{' '}
                <a
                  href="https://github.com/qianqin11/Code-Estimating-the-spectral-gap-of-a-trace-class-Markov-operator"
                  {...externalProps}
                >
                  Code
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>{' '}
                (2019). Convergence complexity analysis of Albert and
                Chib&apos;s algorithm for Bayesian probit regression,{' '}
                <em>Annals of Statistics</em>.{' '}
                <a href="https://arxiv.org/abs/1712.08867" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>
                , Y. J. Jung,{' '}
                <a
                  href="https://people.clas.ufl.edu/kdkhare/"
                  {...externalProps}
                >
                  K. Khare
                </a>
                , Q. Qin (2018). Convergence analysis of MCMC algorithms for
                Bayesian multivariate linear regression with non-Gaussian
                errors, <em>Scandinavian Journal of Statistics</em>.{' '}
                <a
                  href="https://users.stat.ufl.edu/~jhobert/papers/hjkq.pdf"
                  {...externalProps}
                >
                  Link
                </a>
                .
              </p>
            </article>

            <article>
              <p>
                Q. Qin,{' '}
                <a
                  href="https://scholar.google.com/citations?hl=en&user=p-n5y8AAAAAJ"
                  {...externalProps}
                >
                  J. P. Hobert
                </a>{' '}
                (2018). Trace-class Monte Carlo Markov chains for Bayesian
                multivariate linear regression with non-Gaussian errors,{' '}
                <em>Journal of Multivariate Analysis</em>.{' '}
                <a href="https://arxiv.org/abs/1602.00136" {...externalProps}>
                  arXiv
                </a>
                .
              </p>
            </article>
          </div>
        </section>

        <section
          className="links-section"
          id="links"
          aria-labelledby="links-title"
        >
          <h2 id="links-title">Links</h2>
          <div className="links-copy">
            <p>
              <a
                href="https://sites.google.com/view/monte-carlo-seminar/"
                {...externalProps}
              >
                Online Monte Carlo Seminar Series
              </a>
              ,{' '}
              <a
                href="https://www.youtube.com/@MonteCarloSeminar"
                {...externalProps}
              >
                Recordings of past talks
              </a>
              .
            </p>
            <p>
              <a href="https://github.com/qianqin11" {...externalProps}>
                My GitHub
              </a>
            </p>
            <p>
              <a
                href="https://scholar.google.com/citations?user=hx9r6UgAAAAJ&hl=en"
                {...externalProps}
              >
                My Google Scholar
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
