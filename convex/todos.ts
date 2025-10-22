import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return {
      success: true,
      data: todos,
    };
  },
});

export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const todo = await ctx.db.insert("todos", {
      title: args.text,
      completed: false,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

export const toggleCompletedTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo)
      return {
        success: false,
        error: "Todo not found",
      };

    await ctx.db.patch(args.id, {
      completed: !todo.completed,
      updatedAt: Date.now(),
    });

    return {
      success: true,
    };
  },
});

export const updateTodo = mutation({
  args: { id: v.id("todos"), text: v.string() },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo)
      return {
        success: false,
        error: "Todo not found",
      };

    await ctx.db.patch(args.id, {
      title: args.text,
      completed: false,
      updatedAt: Date.now(),
    });

    return {
      success: true,
    };
  },
});

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo)
      return {
        success: false,
        error: "Todo not found",
      };

    await ctx.db.delete(args.id);

    return {
      success: true,
    };
  },
});

export const deleteAllTodos = mutation({
  handler: async (ctx) => {
    const allTodos = await ctx.db.query("todos").collect();

    for (const todo of allTodos) {
      await ctx.db.delete(todo._id);
    }

    return {
      success: true,
    };
  },
});
