import { useState } from 'react'
import { ButtonFactory } from "../Factory/ButtonFactory";
import { WrapperFactory } from "../Factory/WrappersFactory";

export default function Home() {

  const [showWrapper, setShowWrapper] = useState<boolean>(false);
  const [changeWrapper, setChangeWrapper] = useState<number>(1);

  return (
    <div>
        <h1>Home page</h1>
        <ButtonFactory text="Show Wrapper" button_type={1} action={() => setShowWrapper(true)} />
        <ButtonFactory text="Hide Wrapper" button_type={2} action={() => setShowWrapper(false)} />
        <ButtonFactory text="Change Wrapper" button_type={3} action={() => setChangeWrapper(Math.floor(Math.random() * 3) + 1)} />

        {showWrapper ?
        <WrapperFactory wrapper_type={changeWrapper} max_width={100}>
          <h1>Wrapper</h1>
        </WrapperFactory>
        : null}
    </div>
  );
}


