<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->

<template>
  <footer class="bg-white">
    <header class="border-b border-gray-200 py-8">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-blue-900 mb-2 font-pushpenny">
          Sign up for free Join thousands of users
        </h2>
      </div>
    </header>

    <div class="max-w-6xl mx-auto px-4 py-12">
      <div class="">
        <!-- left column - company & support -->
        <div class="space-y-8 grid grid-cols-2">
          <div class="">
            <h3 class="text-lg font-semibold text-blue-900 mb-4">Company</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >About Us</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >Features</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >Blog</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >Careers</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >Legal</a
                >
              </li>
            </ul>
          </div>

          <div class="">
            <h3 class="text-lg font-semibold text-blue-900 mb-4">Support</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="mailto:hello@bomba.co"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >hello@bomba.co</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors flex items-center"
                >
                  WhatsApp
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-600 hover:text-blue-900 transition-colors"
                  >Help Center</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- right column - company information -->
        <div class="space-y-4">
          <p class="text-lg font-medium text-[#0D2C65]">
            The neo bank for Africans globally
          </p>

          <p class="text-sm text-gray-600 max-w-xs">
            Bomba Ltd is a UK-incorporated Company with Registration Number (RC.
            12551277)
          </p>
        </div>
      </div>

      <!-- bottom section -->
      <div class="border-t border-gray-200 pt-8">
        <div
          class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0"
        >
          <!-- app download links -->
          <div
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button
              class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                />
              </svg>
              <span class="text-sm font-medium">Get it on Google Play</span>
            </button>
            <button
              class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg class="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
                />
              </svg>
              <span class="text-sm font-medium">Download on the App Store</span>
            </button>
          </div>

          <!-- newsletter subscription -->
          <div class="flex flex-col space-y-4">
            <h4 class="text-sm font-medium text-gray-900">
              Stay update on our newsletter
            </h4>

            <div class="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                class="flex-1 px-4 py-2 bg-blue-900 text-white placeholder-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
              <button
                class="px-4 py-2 bg-blue-900 text-white font-medium underline rounded-r-lg hover:bg-blue-800 transition-colors"
              >
                Subscribe >
              </button>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0"
        >
          <!-- copyright and legal links -->
          <div
            class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
          >
            <p class="text-sm text-gray-600">
              © {{ new Date().getFullYear() }} Bomba Limited. All rights
              reserved.
            </p>

            <div class="flex flex-wrap space-x-4 text-sm">
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Terms of Service
              </a>

              <span class="text-gray-400">|</span>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Privacy Policy
              </a>

              <span class="text-gray-400">|</span>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                T&C UK
              </a>

              <span class="text-gray-400">|</span>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <!-- social media links -->
          <ul class="flex space-x-6">
            <li class="">
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Instagram
              </a>
            </li>

            <li class="">
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Facebook
              </a>
            </li>

            <li class="">
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Linkedin
              </a>
            </li>

            <li class="">
              <a
                href="#"
                class="text-gray-600 hover:text-blue-900 transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
