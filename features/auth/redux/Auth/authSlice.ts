import { createSlice } from "@reduxjs/toolkit";
import {
  registerInitiate,
  registerUser,
  registerVerify,
  login,
  forgotPasswordInitiate,
  forgotPasswordVerify,
  resetPassword,
} from "./authThunks";

interface AuthState {
  loading: boolean;
  error: string | null;
  data: any | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // loginSuccess(state) {
    //   state.isLoggedIn = true;
    // },
    // logout(state) {
    //   state.isLoggedIn = false;
    // },
    setUser: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
    // ✅ Optional: Logout
    logout: (state) => {
      state.data = null;
      localStorage.removeItem("authUser"); // clean localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(registerInitiate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerInitiate.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(registerInitiate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(registerVerify.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerVerify.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(registerVerify.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(forgotPasswordInitiate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPasswordInitiate.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(forgotPasswordInitiate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(forgotPasswordVerify.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPasswordVerify.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(forgotPasswordVerify.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
