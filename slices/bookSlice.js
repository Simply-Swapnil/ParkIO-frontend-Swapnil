import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    parkingSpot : null,
    parkingSlot : null
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setParkingSpot: (state, action) => {
            state.parkingSpot = action.payload;
        },
        setParkingSlot: (state, action) => {
            state.parkingSlot = action.payload;
        }
    }
})

export const { setParkingSpot, setParkingSlot } = bookSlice.actions;

//Selectors
export const selectParkingSpot = (state) => state.nav.parkingSpot;
export const selectParkingSlot = (state) => state.nav.parkingSlot;

export default bookSlice.reducer;