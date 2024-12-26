package com.prekdu;

/*
 * Create a basic Java Program that takes 10 strings as input and adds them to an ArrayList and
 * HashSet. Also, create a HashMap by populating the words as key and frequency as the value in the
 * map. Iterate the list, set and map and print the content of the collection.
 */
import java.util.*;
public final class CollectionsExample {
    public static void performTask(String ...allStrings){
        
        //adding the Strings to ArrayList
        ArrayList<String> myArrList=new ArrayList<>();
        for(String currString:allStrings){
            myArrList.add(currString);
        }
        
        HashSet<String> myHashSet=new HashSet<>();
        // // Adding the Strings to HashSet
        for(String currString:allStrings){
            myHashSet.add(currString);
        }
        
        
        HashMap<String,Integer>freqMap=new HashMap<>();
        
        // Adding the Strings to HashMap
        for(String currString:allStrings){
            freqMap.put(currString, freqMap.getOrDefault(currString, 0) + 1);
        }
        
        //Traversing the ArrayList
        for(String currString:myArrList){
            System.out.println(currString);
        }
        
        //Traversing the HashSet
        for(String currString:myHashSet){
            System.out.println(currString);
        }
        
        //Traversing the HashMap
        for (HashMap.Entry<String, Integer> entry : freqMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
      
    }
  public static void main(String[] args) {
      performTask("Mirza", "is", "a", "fresher", "passionate", "about", "technology", "and", "impactful", "projects");
  }
}
