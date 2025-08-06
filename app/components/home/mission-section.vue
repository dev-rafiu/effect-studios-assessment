<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

const currencies = ref([
  { value: "GBP", label: "GBP", flag: "🇬🇧" },
  { value: "USD", label: "USD", flag: "🇺🇸" },
  { value: "NGN", label: "NGN", flag: "🇳🇬" },
]);

const sendCurrency = ref("GBP");
const receiveCurrency = ref("NGN");
const sendAmount = ref("1000");
const exchangeRates = ref<Record<string, number>>({});
const isLoading = ref(false);
const error = ref("");

const fetchExchangeRates = async () => {
  isLoading.value = true;
  error.value = "";

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${sendCurrency.value}`
    );
    const data = await response.json();
    exchangeRates.value = data.rates;
  } catch (err) {
    error.value = "Failed to fetch exchange rates";
    console.error("Error fetching exchange rates:", err);
    // Fallback rates for demo purposes
    exchangeRates.value = {
      GBP: 1,
      USD: 1.27,
      NGN: 1950.5,
    };
  } finally {
    isLoading.value = false;
  }
};

const convertedAmount = computed(() => {
  if (!exchangeRates.value[receiveCurrency.value] || !sendAmount.value) {
    return "0.00";
  }

  const amount = parseFloat(sendAmount.value.replace(/,/g, "")) || 0;
  const rate = exchangeRates.value[receiveCurrency.value] as number;
  const converted = amount * rate;

  return converted.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
});

const calculatedFee = computed(() => {
  const amount = parseFloat(sendAmount.value.replace(/,/g, "")) || 0;
  const fee = amount * 0.01; // 1% fee
  return fee.toFixed(2);
});

const formatAmount = (value: string) => {
  const num = value.replace(/,/g, "");
  if (isNaN(Number(num))) return sendAmount.value;
  return parseFloat(num).toLocaleString("en-US");
};

const handleAmountInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value.replace(/,/g, "");
  if (!isNaN(Number(value)) && value !== "") {
    sendAmount.value = formatAmount(value);
  }
};

watch([sendCurrency, receiveCurrency], () => {
  fetchExchangeRates();
});

onMounted(() => {
  fetchExchangeRates();
});
</script>

<template>
  <section class="py-12 bg-white border-b border-gray-100">
    <div class="container mx-auto px-4 flex flex-col items-center gap-4">
      <h1
        class="text-[40px] font-medium text-[#0D2C65] leading-[47px] mb-6 text-center max-w-[55rem]"
      >
        We are on a mission to reduce the cost of sending money to Africa at an
        average cost of 1%
      </h1>

      <div class="flex flex-col-reverse lg:flex-row gap-20 justify-between">
        <!-- currency conversion -->
        <div class="bg-white w-full max-w-md space-y-8">
          <div class="space-y-6">
            <!-- send  -->
            <div class="flex h-16">
              <div
                class="flex items-center justify-between relative border border-[#D1D1D1] rounded-l border-r-0 w-full"
              >
                <label
                  class="text-xs text-[#8C8C8C] mb-3 block absolute -top-2 left-5 bg-white px-2"
                >
                  You send
                </label>

                <input
                  :value="sendAmount"
                  class="text-2xl pl-5 font-medium text-[#0D2C65] bg-transparent border-none outline-none w-full"
                  type="text"
                  placeholder="1000"
                  @input="handleAmountInput"
                />
              </div>

              <div class="relative">
                <select
                  v-model="sendCurrency"
                  class="appearance-none bg-[#233375] h-full text-white px-4 py-3 pr-10 rounded-lg border-l-0 rounded-l-none font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option
                    v-for="currency in currencies"
                    :key="currency.value"
                    :value="currency.value"
                  >
                    {{ currency.flag }} {{ currency.label }}
                  </option>
                </select>

                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- You receive section -->
            <div class="flex h-16">
              <div
                class="flex relative items-center justify-between border border-[#D1D1D1] border-r-0 rounded-md w-full rounded-r-none"
              >
                <label
                  class="text-xs text-[#8C8C8C] mb-3 block absolute -top-2 left-5 bg-white px-2"
                >
                  Recipient Gets
                </label>

                <span class="text-2xl font-medium text-[#0D2C65] pl-5">
                  {{ isLoading ? "..." : convertedAmount }}
                </span>
              </div>

              <div class="relative">
                <select
                  v-model="receiveCurrency"
                  class="appearance-none bg-[#233375] text-white px-4 py-3 pr-10 h-full rounded-lg border-l-0 rounded-l-none font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option
                    v-for="currency in currencies"
                    :key="currency.value"
                    :value="currency.value"
                  >
                    {{ currency.flag }} {{ currency.label }}
                  </option>
                </select>

                <div
                  class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Error message -->
            <div
              v-if="error"
              class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg"
            >
              <p class="text-sm text-red-600">{{ error }}</p>
            </div>

            <button
              class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors hidden"
              title="Swap currencies"
              @click="
                () => {
                  const temp = sendCurrency;
                  sendCurrency = receiveCurrency;
                  receiveCurrency = temp;
                }
              "
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>

          <div class="">
            <div class="text-sm space-y-4">
              <div class="space-y-1">
                <div
                  class="flex items-center justify-between text-sm text-[#6F6F6F]"
                >
                  <p class="">Amount we&apos;ll convert</p>
                  <p>Guaranteed rate (1 hrs)</p>
                </div>

                <div class="flex items-center justify-between text-[#0D2C65]">
                  <p class="">{{ sendAmount }}</p>
                  <p class="">
                    1 {{ sendCurrency }} /
                    {{ exchangeRates[receiveCurrency]?.toFixed(4) || "..." }}
                    {{ receiveCurrency }}
                  </p>
                </div>
              </div>

              <div class="space-y-1">
                <div
                  class="flex items-center justify-between text-sm text-[#6F6F6F]"
                >
                  <p class="">Total pay</p>
                  <p class="">Average duration</p>
                </div>

                <div class="flex items-center justify-between text-[#0D2C65]">
                  <p class="">{{ sendAmount }}</p>
                  <p class="text-[#0D2C65]">Instant</p>
                </div>
              </div>

              <span class="text-gray-600 hidden">
                1 {{ sendCurrency }} =
                {{ exchangeRates[receiveCurrency]?.toFixed(4) || "..." }}
                {{ receiveCurrency }}
              </span>

              <div v-if="isLoading" class="flex items-center gap-2">
                <div
                  class="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                />
                <span class="text-xs text-gray-500">Updating...</span>
              </div>
            </div>

            <div class="flex items-center justify-between text-sm mb-6 hidden">
              <div class="flex items-center gap-4">
                <div class="w-2 h-2 bg-[#233375] rounded-full"></div>
                <span class="text-gray-600"
                  >{{ calculatedFee }} {{ sendCurrency }}</span
                >
              </div>
              <div class="flex items-center gap-2">
                <span
                  class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium"
                  >Express</span
                >
                <svg
                  class="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <span class="text-gray-600">Fee</span>
            </div>
          </div>

          <button class="bg-[#233375] w-full p-2 rounded-[5px] hidden lg:block">
            Get started for free
          </button>
        </div>

        <!-- text content -->
        <div class="space-y-4">
          <p class="text-[#6E80A3]">Why Bomba?</p>
          <h2
            class="text-[#0D2C65] text-[3rem] max-w-sm lg:leading-[60px] font-medium"
          >
            Send & Receive money on your own terms
          </h2>

          <p class="max-w-lg text-[#6E80A3]">
            Bomba provides you the luxury of sending money at rates that suit
            you. You can easily send and swap money between
            <span class="text-[#0D2C65]">GBP</span>,
            <span class="text-[#0D2C65]">USD</span>, and
            <span class="text-[#0D2C65]">NGN</span> using Bomba&apos;s '<span
              class="text-[#23CE6B]"
            >
              Swap </span
            >' and '<span class="text-[#23CE6B]">Express</span>' services. Beat
            bank rates, save time and gain more.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
