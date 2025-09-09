## 구현 방안
- 1단계: 사용자 화풍 학습 (LoRA fine-tuning)
	- 데이터: 사용자의 화풍이 잘 드러나는 고품질 이미지 5~20장. 이미지 일관성이 중요 (평가지표로 뽑아서 퀄리티 확인)
	- 옵션: 이미지에 대한 캡션도 사용자가 같이 제공하면, 이를 통해 LoRA를 학습가능
	- 논문: https://arxiv.org/pdf/2106.09685
- 2단계: 일러스트 구도, 엣지, 빛 제어 (ContrlNet)
	- ControlNet 모델 선택: 제어하려는 요소에 맞는 ControlNet 모델을 선택 하고 compose
	- 내 생각: composing할때도 가중치를 줄 수 있을거 같음. 그래서 동적으로 각각의 가중치를 변화시켜서 결과물을 뽑을 수 있을듯?
	- 논문: https://arxiv.org/pdf/2302.05543
- 결과: 사용자가 프롬프트 + conditions를 통해 자신이 원하는 화풍의 일러스트를 빠르게 완성시키고 활용할 수 있음. 
- 향후 과제
	- 사용자의 LoRA condition에 따라 퀄리티가 어떻게 변하는지 metric 확인 필요.
	- 완성된 결과에 AUDIO도 선택적으로 입히기.
	- condition weight마다의 가중치에 따라. 퀄리티가 어떻게 바뀌는지 metric 확인 필요
	- LoRA -> DreamBooth로 full fine-tuning을 통해 퀄리티 변화 metric 확인 필요
구현하기 위해 해야할것: Stable Diffusion v1.5 LoRA로 fine-tuning하는 코드 작성. 각각의 condition마다의 ControlNet모델 훈련.