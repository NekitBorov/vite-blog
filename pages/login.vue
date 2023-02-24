<template>
  <NuxtLayout name="auth">
      <div class="w-full max-w-md space-y-8">
        <form class="mt-8">
          <input type="hidden" name="remember" value="true">
          <div class="-space-y-px rounded-md">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input v-model="formData.email" id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Email address">
              <div class="mt-1 mb-1 h-4">
                <p v-if="fieldError('email')" class="text-xs text-red-600">{{ fieldError('email') }}</p>
              </div>
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input v-model="formData.password" id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Password">
              <div class="mt-1 mb-1 h-4">
                <p v-if="fieldError('password')" class="text-xs text-red-600">{{ fieldError('password') }}</p>
              </div>
            </div>
          </div>
          <div>
            <button @click="authorizationRequest" type="button" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <div>
        <button @click="goToRegistration" type="button" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          I dont have an account
        </button>
      </div>
      <div>
        <button type="button" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Enter as a guest
        </button>
      </div>
  </NuxtLayout>
</template>

<script setup>
import { email, minLength, required } from "@vuelidate/validators";
import { useValidateComposable } from "@/composables/validate";
import { useNuxtApp, useRouter } from "nuxt/app";

const { $postRequest } = useNuxtApp();
const router = useRouter();

const fields = {
  email: null,
  password: null
};
const rules = {
  email: { required, email },
  password: { required, minLength: minLength(5) }
};

const { formData, v$, fieldError } = useValidateComposable(fields, rules);

const goToRegistration = async () => { await router.push("/registration"); };
const goToPosts = async () => { await router.push("/posts"); };

const authorizationRequest = async () => {
  try {
    v$.value.$validate();
    if (v$.value.$error) {
      return;
    }

    const { token } = await $postRequest("auth", formData);

    localStorage.setItem("token", JSON.stringify(token));

    await goToPosts();
  } catch (e) {
    alert("Something is wrong");
    console.error("Authorization error", e);
  }
};
</script>
