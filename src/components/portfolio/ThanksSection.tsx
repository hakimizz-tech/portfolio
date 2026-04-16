import {
  avatarImage,
  credit,
  thanksLines,
  thanksSubline,
} from '../../data/portfolioData'

export function ThanksSection() {
  return (
    <footer className="thanks" aria-label="Closing section">
      <div className="thanks__inner">
        <div className="thanks__title-wrap">
          <h2 className="thanks__title">
            {thanksLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
        </div>

        <p className="thanks__subline">
          {thanksSubline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        <p className="thanks__credit">
          <img src={avatarImage} alt="" className="thanks__avatar" />
          <a href={credit.href} target="_blank" rel="noreferrer">
            {credit.authorLine}
          </a>
        </p>
      </div>
    </footer>
  )
}