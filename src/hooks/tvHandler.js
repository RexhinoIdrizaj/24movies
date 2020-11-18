import { useCallback } from "react";
import { TVEventHandler } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

/**
 * @category 
 * CustomHooks
 * @description
 * Used to initialize a Tv event handler object on screen focus
 * @function
 * useTVEventHandler
 * @param {*} handleEvent callback to handle remote controls that takes an event as param
 * @returns {void}
 */
export const useTVEventHandler = (handleEvent) => {
  //use focus effect to handle on event on screen focus
  useFocusEffect(
    useCallback(() => {
      const tvEventHandler = new TVEventHandler();
      tvEventHandler.enable(null, (cmp, evt) => {
        handleEvent && handleEvent(evt);
      });
      return () => tvEventHandler.disable();
    }, [handleEvent]),
  );
};
