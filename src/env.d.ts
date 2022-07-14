import { createApp } from 'vue';
/// <reference types="vite/client" />
/// <reference types="vue/ref-macros" />


declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '@jiaminghi/data-view';

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes { }
}

declare global {
  interface Window {
    $vueApp: createApp;
  }
}

