import { createSlice } from "@reduxjs/toolkit";
import {
  registerInitiate,
  registerUser,
  registerVerify,
  login,
  forgotPasswordInitiate,
  forgotPasswordVerify,
  resetPassword,
  logout,
} from "@/features/redux/Auth/authThunks";

interface AuthState {
  loading: boolean;
  error: any | null;
  data: any | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  data: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // loginSuccess(state) {
    //   state.isLoggedIn = true;
    // },
    // logout(state) {

    // },
    setUser: (state, action) => {
      const { data } = action.payload;
      state.data = data;
    },
    // ✅ Optional: Logout
    logout: (state) => {
      state.data = null;
      localStorage.removeItem("persist:root"); // clean localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.loading = false;
        state.data = data;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.data = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
      .addCase(registerInitiate.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
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
        state.error = action.payload;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.loading = false;
        state.data = data;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
        state.error = action.payload;
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
        state.error = action.payload;
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
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
