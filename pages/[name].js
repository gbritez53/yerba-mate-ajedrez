import React from "react";
import Section from "components/Section";
import { useRouter } from "next/router";

const Productos = () => {
  const {query} = useRouter();
  return (
    <Section>
      <h1 className="text-5xl text-center font-bold py-8">{query.name}</h1>
      <p>
        Sed accusantium similique molestias eius repellat laboriosam modi
        mollitia autem aperiam quas impedit unde, aliquid dicta laudantium iure
        provident ipsa labore minima delectus nulla perspiciatis harum
        necessitatibus. Labore animi sint maiores sapiente enim molestiae earum,
        ipsum beatae aliquid pariatur aperiam in ea nostrum a ullam, expedita
        cumque sed! Natus saepe facere id, ad illum dolore, necessitatibus at
        cupiditate voluptate temporibus impedit facilis iure ducimus explicabo
        quos commodi mollitia.
      </p>
    </Section>
  );
};

export default Productos;
