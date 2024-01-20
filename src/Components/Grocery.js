const Grocery = () => {
  return (
    <div className="py-36 px-48">
      <div className=" py-6  w-5/6 m-auto">
        <h1 className=" font-bold text-3xl pt-8 pb-3">why build Grocery Store ?...</h1>
        <p className="text-lg font-medium">
          We're describing the implementation of a grocery section in a project,
          incorporating concepts such as lazy loading, suspense, and fallback.
          In this context, when users navigate to the grocery section of the
          application, the associated grocery component is loaded progressively,
          leveraging lazy loading techniques. Additionally, the use of suspense
          helps manage the asynchronous loading process, ensuring a smooth user
          experience. Furthermore, a separate JavaScript file is dedicated to
          the entire grocery functionality, allowing for efficient organization
          and modularization within the application architecture. This approach
          optimizes the performance and responsiveness of the application by
          deferring the loading of grocery-related components until they are
          specifically accessed by users.
        </p>
      </div>
    </div>
  );
};

export default Grocery;
