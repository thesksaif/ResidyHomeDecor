import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: [], // array of menu ids that are open
    defaultId: '', // default selected menu id
    openItem: '', // currently open menu item
    drawerOpen: false, // controls sidebar drawer open/close
    selectedItem: [], // array of selected menu item ids
    selectedID: '' // active parent/group id
};

const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        openMenu(state, action) {
            state.isOpen = [action.payload];
            state.openItem = action.payload;
        },
        closeMenu(state) {
            state.isOpen = [];
            state.openItem = '';
        },
        setDefaultId(state, action) {
            state.defaultId = action.payload;
        },
        openDrawer(state, action) {
            state.drawerOpen = action.payload;
        },
        activeItem(state, action) {
            state.selectedItem = action.payload;
        },
        activeID(state, action) {
            state.selectedID = action.payload;
        }
    }
});

export const { openMenu, closeMenu, setDefaultId, openDrawer, activeItem, activeID } = menu.actions;
export default menu.reducer;
