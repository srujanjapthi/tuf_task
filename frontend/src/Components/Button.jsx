import React, { useState } from "react";
import { useGetFlashCards } from "../api/GetFlashCardsApi";

const Button = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // const { cards, isLoading } = useGetFlashCards();

  // if (isLoading) {
  //   return <>Loading...</>
  // }

  // if (!cards){
  //   return <>Cannot get data..</>
  // }

  const cards = [
    {
      title: "Two Sum",
      statement: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      solution: "Use a hash map to store the difference between the target and the current number as you iterate through the array. If the difference exists in the map, you've found the two numbers."
    },
    {
      title: "Reverse String",
      statement: "Write a function that reverses a string. The input string is given as an array of characters `s`.",
      solution: "Use two pointers, one starting from the beginning and the other from the end of the array. Swap the characters at these pointers and move them towards the center until they meet."
    },
    {
      title: "Valid Parentheses",
      statement: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      solution: "Use a stack to keep track of the opening brackets. For each closing bracket, check if it matches the top of the stack. If it does, pop the stack; otherwise, the string is invalid."
    },
    {
      title: "Merge Two Sorted Lists",
      statement: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
      solution: "Use two pointers to compare the current nodes of the two lists. Attach the smaller node to the merged list and move the pointer forward. Repeat until all nodes are merged."
    },
    {
      title: "Climbing Stairs",
      statement: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      solution: "This is a Fibonacci-like problem. Use dynamic programming to store the number of ways to reach each step. The number of ways to reach the nth step is the sum of the ways to reach (n-1) and (n-2) steps."
    },
    {
      title: "Best Time to Buy and Sell Stock",
      statement: "You are given an array where the ith element is the price of a given stock on day `i`. Find the maximum profit you can achieve by buying and then selling one share of the stock.",
      solution: "Iterate through the array, keeping track of the minimum price seen so far and calculating the profit if you sold today. Update the maximum profit accordingly."
    },
    {
      title: "Maximum Subarray",
      statement: "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      solution: "Use Kadane's algorithm: iterate through the array, calculating the current subarray sum and updating the maximum sum as you go."
    },
    {
      title: "Product of Array Except Self",
      statement: "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.",
      solution: "Calculate the product of all elements to the left and right of each element, then multiply these values to get the result for each index."
    },
    {
      title: "Longest Substring Without Repeating Characters",
      statement: "Given a string `s`, find the length of the longest substring without repeating characters.",
      solution: "Use a sliding window approach with a set to track characters in the current substring. Expand the window until a repeat is found, then contract it until the substring is unique again."
    },
    {
      title: "Search in Rotated Sorted Array",
      statement: "You are given an integer array `nums` sorted in ascending order (with distinct values), and an integer `target`. Suppose `nums` is rotated at an unknown pivot. Search for `target` in `nums`.",
      solution: "Use a modified binary search to find the target by checking which part of the array is sorted and then deciding which part to search next."
    },
    {
      title: "Container With Most Water",
      statement: "Given `n` non-negative integers `a1, a2, ..., an`, where each represents a point at coordinate (i, ai). `n` vertical lines are drawn such that the two endpoints of the line `i` is at (i, 0) and (i, ai). Find two lines that together with the x-axis forms a container, such that the container contains the most water.",
      solution: "Use two pointers, one at the beginning and one at the end of the array. Move the pointer with the smaller height inward, calculating the area at each step."
    },
    {
      title: "Remove Nth Node From End of List",
      statement: "Given the head of a linked list, remove the `nth` node from the end of the list and return its head.",
      solution: "Use two pointers: advance one pointer by `n` steps and then move both pointers until the first one reaches the end. Remove the node where the second pointer is located."
    },
    {
      title: "Merge Intervals",
      statement: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals.",
      solution: "Sort the intervals by start time, then iterate through them, merging overlapping intervals and adding non-overlapping intervals to the result list."
    },
    {
      title: "Unique Paths",
      statement: "A robot is located at the top-left corner of an `m x n` grid. The robot can only move either down or right at any point in time. How many possible unique paths are there to reach the bottom-right corner?",
      solution: "Use dynamic programming to build a table where each entry represents the number of ways to reach that cell from the start."
    },
    {
      title: "Coin Change",
      statement: "You are given coins of different denominations and a total amount of money. Write a function to compute the fewest number of coins that you need to make up that amount.",
      solution: "Use dynamic programming to build a table of minimum coins required for each amount from `0` to the target amount."
    },
    {
      title: "Binary Tree Inorder Traversal",
      statement: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      solution: "Use a stack to simulate the recursive inorder traversal process by keeping track of nodes yet to be visited."
    },
    {
      title: "Linked List Cycle",
      statement: "Given the head of a linked list, determine if the linked list has a cycle in it.",
      solution: "Use two pointers, one moving twice as fast as the other. If they meet, there is a cycle; if the fast pointer reaches the end, there is no cycle."
    },
    {
      title: "Implement Queue using Stacks",
      statement: "Implement a queue using only two stacks. The implemented queue should support all the functions of a normal queue (enqueue, dequeue, peek, and empty).",
      solution: "Use one stack for pushing elements and the other for popping them. Transfer elements between stacks as needed to maintain the queue order."
    },
    {
      title: "Minimum Depth of Binary Tree",
      statement: "Given a binary tree, find its minimum depth, which is the number of nodes along the shortest path from the root node down to the nearest leaf node.",
      solution: "Use a breadth-first search (BFS) to explore the tree level by level, stopping as soon as a leaf node is encountered."
    },
    {
      title: "House Robber",
      statement: "Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
      solution: "Use dynamic programming where the state represents the maximum money that can be robbed up to the current house without alerting the police."
    },
    {
      title: "Invert Binary Tree",
      statement: "Invert a binary tree, i.e., swap the left and right children of every node.",
      solution: "Use a recursive approach to swap the left and right children of each node in the tree."
    },
    {
      title: "Kth Largest Element in an Array",
      statement: "Find the `kth` largest element in an unsorted array.",
      solution: "Use a quickselect algorithm or a min-heap to find the kth largest element efficiently."
    },
    {
      title: "Binary Tree Level Order Traversal",
      statement: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
      solution: "Use a queue to perform a breadth-first search (BFS), traversing each level of the tree and recording the values of nodes at each level."
    },
    {
      title: "Find Peak Element",
      statement: "A peak element is an element that is strictly greater than its neighbors. Given an integer array `nums`, find a peak element.",
      solution: "Use binary search to efficiently find a peak element by comparing middle elements and deciding which half of the array to search next."
    },
    {
      title: "Set Matrix Zeroes",
      statement: "Given an `m x n` integer matrix, if an element is `0`, set its entire row and column to `0`.",
      solution: "Use the first row and first column to store information about which rows and columns should be set to zero, then update the matrix accordingly."
    },
    {
      title: "Word Search",
      statement: "Given an `m x n` grid of characters `board` and a string `word`, return true if `word` exists in the grid.",
      solution: "Use backtracking to explore all possible paths in the grid starting from each cell, searching for the word."
    }
  ];
  
  

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
      console.log(`Switched to card index: ${currentCardIndex - 1}`);
    }
  };

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
      console.log(`Switched to card index: ${currentCardIndex + 1}`);
    }
  };

  return (
    <div className="App">
      <div className="box-container" onClick={handleClick}>
        <div className={`box ${isFlipped ? "is-flipped" : ""}`}>
          <div className="box-front flex flex-col">
            <div className="font-bold text-white text-2xl">
              {cards[currentCardIndex].title}
            </div>
            <div className="text-white">
              {cards[currentCardIndex].statement}
            </div>
          </div>
          <div className="box-back text-white">{cards[currentCardIndex].solution}</div>
        </div>
      </div>

      <div className="navigation-buttons flex gap-16">
        <button onClick={prevCard} disabled={currentCardIndex === 0}>
          Previous
        </button>
        <button
          onClick={nextCard}
          disabled={currentCardIndex === cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Button;
