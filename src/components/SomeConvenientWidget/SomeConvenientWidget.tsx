import React from "react";

import s from "./SomeConvenientWidget.module.css";

interface SomeConvenientWidgetProps {
  onLoad: () => void;
}

const SomeConvenientWidget: React.FC<SomeConvenientWidgetProps> = ({
  onLoad,
}) => {
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();
  const randomTimeOffset = Math.ceil(Math.random() * 3000);

  React.useEffect(() => {
    timeout.current = setTimeout(onLoad, 2000 + randomTimeOffset);

    return () => clearTimeout(timeout.current);
  }, [onLoad, randomTimeOffset]);

  return <div className={s.root}>Widget Content</div>;
};

export default React.memo(SomeConvenientWidget);
