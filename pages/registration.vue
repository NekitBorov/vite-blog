<template>
  <NuxtLayout name="auth">
    <div class="w-full max-w-md space-y-8">
      <form class="mt-6">
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
          <div>
            <label for="name" class="sr-only">Name</label>
            <input v-model="formData.name" id="name" name="name" type="text" autocomplete="current-name" required class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Name">
            <div class="mt-1 mb-1 h-4">
              <p v-if="fieldError('name')" class="text-xs text-red-600">{{ fieldError('name') }}</p>
            </div>
          </div>
          <div>
            <label for="extra_details" class="sr-only">Extra Details</label>
            <input v-model="formData.extra_details" id="extra_details" name="extra_details" type="text" autocomplete="current-extra_details" required class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Extra details">
            <div class="mt-1 mb-1 h-4">
              <p v-if="fieldError('extra_details')" class="text-xs text-red-600">{{ fieldError('extra_details') }}</p>
            </div>
          </div>
          <div>
            <label for="skills" class="sr-only">Skills</label>
            <input v-model="formData.skills" id="skills" name="skills" type="text" autocomplete="current-skills" required class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Skills">
            <div class="mt-1 mb-1 h-4">
              <p v-if="fieldError('skills')" class="text-xs text-red-600">{{ fieldError('skills') }}</p>
            </div>
          </div>
          <div>
            <label for="profession" class="sr-only">Profession</label>
            <input v-model="formData.profession" id="profession" name="profession" type="text" autocomplete="current-profession" required class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Profession">
            <div class="mt-1 mb-1 h-4">
              <p v-if="fieldError('profession')" class="text-xs text-red-600">{{ fieldError('profession') }}</p>
            </div>
          </div>
          <div>
            <label for="details" class="sr-only">Details</label>
            <input v-model="formData.details" id="details" name="details" type="text" autocomplete="current-details" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm rounded-lg" placeholder="Details">
            <div class="mt-1 mb-1 h-4">
              <p v-if="fieldError('details')" class="text-xs text-red-600">{{ fieldError('details') }}</p>
            </div>
          </div>
        </div>
        <div>
          <button @click="registrationRequest" type="button" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign up
          </button>
        </div>
      </form>
    </div>
      <div>
        <button @click="goToLogin" type="button" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          I already have an account
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
import { required, email, minLength } from "@vuelidate/validators";
import { useValidateComposable } from "@/composables/validate";
import { useNuxtApp, useRouter } from "nuxt/app";

const { $postRequest } = useNuxtApp();
const router = useRouter();

const fields = {
  email: null,
  password: null,
  name: null,
  extra_details: null,
  skills: null,
  profession: null,
  details: null
};
const rules = {
  email: { required, email },
  password: { required, minLength: minLength(5) },
  name: { required },
  extra_details: { required },
  skills: { required },
  profession: { required },
  details: { required }
};

const { formData, v$, fieldError } = useValidateComposable(fields, rules);

const goToLogin = () => { router.push("/login"); };

const registrationRequest = async () => {
  try {
    v$.value.$validate();
    if (v$.value.$error) {
      return;
    }

    await $postRequest("users", formData);

    alert("Everything is good, now login with your credentials");
    goToLogin();
  } catch (e) {
    console.error("Registration error", e);
  }
};
</script>
