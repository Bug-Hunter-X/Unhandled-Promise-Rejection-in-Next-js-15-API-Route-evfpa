# Unhandled Promise Rejection in Next.js 15 API Route

This repository demonstrates a common error in Next.js 15 applications involving unhandled promise rejections within API routes. The `pages/about.js` component makes a fetch request to `/api/data`.  The `/api/data` route attempts an asynchronous operation that could fail, but the error handling is not robust enough.

## Problem

The `About` page's `fetch` call is made without error handling. If the API route throws an error, the promise will reject, leading to a runtime error or unexpected behavior.

## Solution

The provided solution adds proper error handling in the `About` component, using `try...catch` to handle potential network errors or errors from the API route.
