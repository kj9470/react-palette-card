import { Card } from "./components/Card";

import profile1 from "./assets/profile1.png";
import profile2 from "./assets/profile2.png";
const App = () => {
  return (
    <div
      style={{
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        background: "#f9f9f9",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <div>컴포넌트 테스트</div>
      <Card
        title="권정"
        description="md 사이즈/greeen 설명을 써야 합니다 설명 설명 디자인을 예쁘게 하고 싶은데 어떻게 하는 것이 좋을까요~?"
        imageSrc={profile1}
        color="green"
        size="md"
        shadow
      />

      <Card
        title="권채영"
        description="sm 사이즈/blue 하나둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열 열하나 열둘 열셋 ! ! !"
        color="blue"
        size="sm"
      />

      <Card
        title="권호떡"
        description="lg 사이즈/yellow 고양이 고양이"
        imageSrc={profile2}
        color="violet"
        size="lg"
        shadow
      />
      <div>red, orange, yellow, green, blue, navy, violet 현재 색상</div>
    </div>
  );
};

export default App;
