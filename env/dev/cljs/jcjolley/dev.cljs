(ns ^:figwheel-no-load jcjolley.dev
  (:require
    [jcjolley.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
