import { mockedTasks } from "../mockedData";

/* Finding the task with the given slug, then finding the context with the given slug, and then
  setting the status of that context to the given status. */
export const changeContextStatus = (taskSlug, contextSlug) => {
  const context = mockedTasks
    .find((task) => task.slug === taskSlug)
    .contexts.find((context) => context.slug === contextSlug);
  context.status = "read";
};
