package com.prekdu;

/*
 * Create a basic Java Program that takes two strings as input and produces the following output.
 * Print the length of the first string
 * Print the length of the second string
 * Print if the length matches or not
 * Print if the two strings are the same
 */

public class StringComparison {
  public static void helper(String str1,String str2){
      int len1=str1.length();
      int len2=str2.length();
      System.out.println("First String is:"+len1);
      System.out.println("Second String is:"+len2);
      
      if(len1==len2){
          System.out.println("Both String have Same length");
      }else{
           System.out.println("Both String have different length");
      }
      
      if(str1==str2){
          System.out.println("Both String are Same");
      }else{
          System.out.println("Both String are different");
      }
      
  }
  public static void main(String[] args)
   {
      String str1="mirzaBeg";
      String str2="Atif_Beg";
      helper(str1,str2);
  }
}
