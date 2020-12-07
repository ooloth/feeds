import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head />
        <body className="overflow-x-hidden bg-white dark:bg-black min-h-screen font-sans text-gray-800 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
