import * as React from 'react';

export default function templateFunc(props: any) {
  // count # of / ?
  console.error(props);
  return (
    <html>
      <body>
        <section
          id="app"
          dangerouslySetInnerHTML={{ __html: props.body}}
        />
        <script src="/reactive-konva/index.js"></script>
      </body>
    </html>
  )
}