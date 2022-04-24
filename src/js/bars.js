import home from "./../assets/icons/home.svg"
import compass from "./../assets/icons/compas.svg"
import trophy from "./../assets/icons/trophy.svg"
import goodMark from "./../assets/icons/good-mark.svg"

import clock from "./../assets/icons/clock.svg"
import star from "./../assets/icons/star.svg"
import download from "./../assets/icons/download.svg"
import heart from "./../assets/icons/heart.svg"
import boxPlus from "./../assets/icons/box-plus.svg"
import boxSuccess from "./../assets/icons/box-success.svg"

import gear from "./../assets/icons/gear.svg"
import door from "./../assets/icons/door.svg"

export const menu = {
    text: "Menu",
    navItems: [
        {
            icon: home,
            text: "Home"
        },
        {
            icon: compass,
            text: "Discover"
        },
        {
            icon: trophy,
            text: "Awards"
        },
        {
            icon: goodMark,
            text: "Celebrities"
        },
        
    ]
}

export const library = {
    text: "Library",
    navItems: [
        {
            icon: clock,
            text: "Recent"
        },
        {
            icon: star,
            text: "Top Rated"
        },
        {
            icon: download,
            text: "Downloaded"
        },
        {
            icon: heart,
            text: "Playlists"
        },
        {
            icon: boxPlus,
            text: "Watchlist"
        },
        {
            icon: boxSuccess,
            text: "Completed"
        },
        
    ]
}

export const general = {
    text: "General",
    navItems: [
        {
            icon: gear,
            text: "Settings"
        },
        {
            icon: door,
            text: "Log Out"
        },       
    ]
}

export const header = {
    headerNavs: [
        {
            text: "Movies"
        },
        {
            text: "TV Shows"
        },
        {
            text: "Anime"
        },       
    ]
}
