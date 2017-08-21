import { injectGlobal } from 'styled-components';

injectGlobal`
   @import url('https://fonts.googleapis.com/css?family=VT323');

   body {
      font-family: 'VT323', monospace;
      font-size: 24px;
   }

   h1 {
      font-size: 1.5em;
   }

   h2 {
      font-size: 1em;
   }

   .navbar-inverse .navbar-brand {
      font-size: 1.5em;
      color: white;
   }

   .Nav {
      text-align: center;
   }

`
