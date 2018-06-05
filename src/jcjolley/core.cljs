(ns jcjolley.core
    (:require
      [reagent.core :as reagent :refer [atom]]))
;; -------------------------
;; State

(defonce state (atom {:nav {:home "home/" :about "about"}
                      :comics {:xkcd {:base-url "https://imgs.xkcd.com/comics/"
                                      :images ["bee_orchid.png", "backups.png"]}
                               :smbc {:base-url "https://www.smbc-comics.com/comics/"
                                      :images ["20111130.gif", "20111204.gif"]}
                               }}))

;; -------------------------
;; Helper functions

(defn build-comic-url [{:keys [base-url images]}]
  (str base-url (rand-nth images)))

(defn get-random-comic-url [state]
  (->> state :comics seq rand-nth val build-comic-url))

;; -------------------------
;; Views

(defn nav-link [[name href]]
  [:li.nav-item
   [:a.nav-link {:href href :key name} name]])

(defn nav-bar []
  [:nav.navbar.navbar-expand-md
   [:a.navbar-brand.px-4 {:href "#"} "LOGO - Jolley's Pad." ]
   [:ul.navbar-nav.mr-auto
    (->> @state :nav seq (map nav-link))]])

(defn show-random-comic []
  [:div
   [:h2 "Laugh a little"]
   [:img.comic {:src (get-random-comic-url @state) :style {:width "100%"}}]])

(defn layout [header body sidebar footer]
  [:div.container-fluid
   [:div.row
    [header]]
   [:div.row
    [:div.col-md-8
     [:div 
      [body]]]
    [:div.col-md-4
     [sidebar]]]
   [:hr.hr]
   [footer]])

(defn header []
  [:div.w-100
   [:div.row
    [nav-bar]]
    [:ol.breadcrumb.mb-0.rounded-0
     [:li.breadcrumb-item.active "Home"]]])

(defn footer []
  [:div
   [:div.row
    [:div.col-md-4 
     [:h4 "Other places to see"]
     [:ul.list-group
      [:li.list-group-item [:a {:href "https://xkcd.com"} "XKCD"]]
      [:li.list-group-item [:a {:href "https://xda-developers.com"} "XDA"]]
      [:li.list-group-item [:a {:href "https://brandonsanderson.com/"} "Brandon Sanderson"]]]]
    [:div.col-md-8
     [:div.card.p-4
      [:h5 "About the author"]
      [:div.row
       [:div.col-sm-4
        [:h1 "ME PIC"]]
       [:div.col-sm-8
        [:p "A big long blurb of text about me, maybe some links to work I want to highlight.
            make it all techinical and cool so potential employers are impressed.  But no too snobby"]]]]]]
   [:div.row
    [:footer.m-3 {:style {:font-size "80%"}} "@Copyright 2018 Joshua Jolley"]
    ]])

(defn sidebar []
  [:div 
   [:h2 "Cool Links"]
   [:ul.list-group
    [:li.list-group-item [:a {:href "http://clicker.jcjolley.com/"} "A&C Clicker"] ]
    [:li.list-group-item [:a {:href "https://blockchain.jcjolley.com/"} "Node Blockchain"] ]
    [:li.list-group-item [:a {:href "https://github.com/jcjolley/"} "GitHub Repos"] ]
    [:li.list-group-item [:a {:href "https://www.twitch.tv/s1mply_me"} "Twtich Channel"] ] 
    [:li.list-group-item [:a {:href "https://stackoverflow.com/users/3014497/jolleyboy"} "My StackOverflow"] ] 
    ]])

(defn home-page []
  (layout header show-random-comic sidebar footer)
  )

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
