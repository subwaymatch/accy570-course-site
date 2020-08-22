export default function LayoutTest() {
  return (
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns">
          <div className="column">
            <p>
              This is a simple example to demonstrate how to use the{' '}
              <a href="https://bulma.io/">Bulma</a> grid system with{' '}
              <a href="https://nextjs.org/">Next.js.</a>
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <span>Full Width (.column)</span>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <span>.column</span>
          </div>

          <div className="column">
            <span>.column</span>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <span>.column</span>
          </div>

          <div className="column">
            <span>.column</span>
          </div>

          <div className="column">
            <span>.column</span>
          </div>
        </div>

        <div className="columns">
          <div className="column is-one-third">
            <span>.column.is-one-third</span>
          </div>

          <div className="column is-two-thirds">
            <span>.column.is-two-thirds</span>
          </div>
        </div>

        <div className="columns">
          <div className="column is-one-quarter">
            <span>.column.is-one-quarter</span>
          </div>

          <div className="column is-three-quarters">
            <span>.column.is-three-quarters</span>
          </div>
        </div>

        <div className="columns">
          <div className="column is-2">
            <span>.column.is-2</span>
          </div>
          <div className="column is-10">
            <span>.column.is-10</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        p {
          font-size: 1.2rem;
          marginb-bottom: 1rem;
          font-family: Helvetica, Arial, sans-serif;
        }
        span {
          display: block;
          border: 1px solid #ddd;
          background-color: #eee;
          padding: 1.5rem;
          font-family: monospace;
        }
      `}</style>
    </section>
  );
}
