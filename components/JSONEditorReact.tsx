import { useEffect, useRef } from "react";
import { JSONEditor, createJSONEditor, JSONEditorPropsOptional } from "vanilla-jsoneditor";

const JSONEditorReact: React.FC<JSONEditorPropsOptional> = (props) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<JSONEditor | null>(null);

  useEffect(() => {
    // create editor
    refEditor.current = createJSONEditor({
      target: refContainer.current!,
      props: {},
    });

    return () => {
      // destroy editor
      if (refEditor.current) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // update props
    if (refEditor.current) {
      refEditor.current.updateProps(props);
    }
  }, [props]);

  return <div ref={refContainer} />;
};

export default JSONEditorReact;
