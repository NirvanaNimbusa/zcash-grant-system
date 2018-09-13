import Showdown from 'showdown';
import xss from 'xss';

const converter = new Showdown.Converter({
  // See https://www.npmjs.com/package/showdown#valid-options for details
  ghCompatibleHeaderId: true,
  parseImgDimensions: true,
  headerLevelStart: 2,
  simplifiedAutoLink: true,
  excludeTrailingPunctuationFromURLs: true,
  strikethrough: true,
  tables: true,
  disableForced4SpacesIndentedSublists: true,
  openLinksInNewWindow: true,
});

export function sanitize(html: string): string {
  return xss(html);
}

export function convert(markdown: string): string {
  const html = converter.makeHtml(markdown);
  return sanitize(html);
}

// TODO: Find a better place for this?
export const markdownStyles = `
  font-family: 'Nunito Sans', 'Helvetica Neue', Arial, sans-serif;

  h1, h2, h3, h4, h5, h6 {
    display: block;
    font-weight: bold;
    margin-top: 0;
  }

  h1 {
    font-size: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  h2 {
    font-size: 1.8rem;
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
  h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  h6 {
    font-size: 1.1rem;
    margin-bottom: 0rem;
  }

  ul,
  ol {
    padding-left: 30px;
    font-size: 1.05rem;
  }

  ul {
    list-style: circle;
  }

  ol {
    list-style: decimal;
  }

  dl {
    dt {
      text-decoration: underline;
    }

    dd {
      padding-left: 1rem;
      margin-bottom: 1rem;
    }
  }

  img {
    max-width: 100%;
  }

  hr {
    margin: 3rem 0;
    border-bottom: 2px solid #EEE;
  }

  code, pre {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
  }

  code {
    padding: 0.2rem 0.25rem;
    margin: 0;
    font-size: 90%;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 2px;

    &:before, &:after {
      display: none;
    }
  }

  pre {
    padding: 0.5rem 0.75rem;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    font-size: 1rem;

    code {
      padding: 0;
      font-size: inherit;
      background: none;
      border: none;
      border-radius: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    margin-bottom: 2rem;

    th, td {
      padding: 0.5rem 1rem;
      border: 1px solid #DDD;
    }

    th {
      font-size: 1.1rem;
      font-weight: bold;
    }

    td {
      font-size: 1rem;
    }
  }

  blockquote {
    margin: 0 0 1rem;
    padding: 0 0 0 0.5rem;
    color: #777;
    border-left: 4px solid rgba(0, 0, 0, 0.08);

    > :last-child {
      margin: 0;
    }
  }
`;
