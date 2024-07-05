# 🤔 2주차 [질문](https://kibong.notion.site/23645b1895664279856437d57eda9a83?pvs=4)

## 1. 페이지별 컴포넌트는 어떻게 관리하는 게 좋을까요?

페이지별로 섹션에 해당하는 컴포넌트나 모든 페이지에서 공통으로 사용하지 않는 컴포넌트를 어떻게 관리하는 게 좋을지 고민입니다.

과제를 진행할 때는 해당 페이지별로 디렉토리화해서 `pages` 폴더에 있는 컴포넌트를 호출하여 관리했습니다. 다른 방법이나 더 좋은 방법이 있을까요?

<br />

## 2. 어떻게 상수화시키는 게 좋을까요?

처음에는 `utils/constants`에 모든 상수를 관리할지, 아니면 각 컴포넌트마다 배치하는 게 좋을지 고민했습니다.

과제를 진행할 때는 상수화할 것이 별로 없으면 컴포넌트 최상단에 배치하거나, 상수가 많거나 길어질 경우 해당 컴포넌트 폴더에 `constants` 파일을 만들어서 관리했습니다.

어떤 방식으로 상수화시키는 게 좋을까요?

<br />

## 3. index 파일 네이밍의 사용 괜찮을까요?

각 컴포넌트를 디렉토리화하고 `index`로 네이밍하여 과제를 진행했습니다. 왜냐하면 컴포넌트를 import할 때 하위 폴더가 많아지면 코드의 길이도 길어질 것 같아서 사용하게 되었습니다.

하지만 `index`로 네이밍하면 코드를 작성하면서 어떤 컴포넌트인지 구분이 잘 안되는 점이 단점인 것 같습니다.

더 좋은 방안이 있거나, 멘토님께서는 어떻게 관리하시는지 궁금합니다.

<br />

## 4. Story 파일들을 stories 폴더로 관리하는 게 좋을까요? 아니면 컴포넌트별로 관리하는 게 좋을까요?

기존에는 `src` 폴더에 `stories` 폴더를 만들어 각 컴포넌트 폴더 구조대로 스토리를 추가했었는데, 이번에는 각 컴포넌트별 폴더에 작성해보았습니다.

그 이유는 다시 `stories` 폴더를 뒤져야 한다는 점에서 개발 시간이 늘어나는 것 같아서입니다.

더 좋은 방안이 있을까요?

<br />

## 5. Storybook 배포 경로를 PR 코멘트로 추가하고 싶은데 어떻게 해야 하나요?

Storybook 배포에 대해 공부하면서 CI를 통해 자동으로 코멘트를 달 수 있다는 것을 알게 되었습니다.

Storybook의 토큰과 사용자의 GitHub 토큰을 repository action의 secret에 설정하면 가능하다는 것을 알게 되었습니다.

먼저 다음과 같이 `yml`을 작성해보았습니다.

```yaml
yaml코드 복사
# Workflow name
name: 'Chromatic Deployment'

# Event for the workflow
on: push

# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - run: yarn
      - uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}

      - name: Create comment PR
        uses: thollander/actions-comment-pull-request@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          message: "🚀 Storybook: ${{ steps.chromatic.outputs.storybookUrl }}"

```

이후 설정에서 두 개의 secret을 설정했습니다.

`CHROMATIC_PROJECT_TOKEN`은 성공적으로 설정할 수 있었지만, `GITHUB_TOKEN`은 앞에 `GITHUB`로 시작할 수 없다는 경고가 뜨며 설정할 수 없었습니다.

<br />

<img width="783" alt="스크린샷 2024-07-05 오후 4 58 51" src="https://github.com/kang-kibong/kang-kibong/assets/33623123/2fac34f7-9363-42ed-9347-2a9d3c29156b">

<br />


때문에 `TOKEN`이라는 이름으로 secret을 설정하고 `yml`을 다시 작성했습니다.

```yaml
yaml코드 복사
# Workflow name
name: 'Chromatic Deployment'

# Event for the workflow
on: push

# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v1
      - run: yarn
      - uses: chromaui/action@v1
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}

      - name: Create comment PR
        uses: thollander/actions-comment-pull-request@v1
        env:
          TOKEN: ${{ secrets.TOKEN }}
        with:
          message: "🚀 Storybook: ${{ steps.chromatic.outputs.storybookUrl }}"

```

이후 push를 진행하고 제대로 Storybook 배포와 URL 코멘트가 달리는지 확인해보았습니다.

<br />

<img width="578" alt="스크린샷 2024-07-05 오후 5 03 09" src="https://github.com/kang-kibong/kang-kibong/assets/33623123/436a0789-41f7-4316-b088-a877be70415e">

<br />

아쉽게도 코멘트가 달리지 않는 것을 확인할 수 있었습니다.

무슨 이유로 안되는지 잘 모르겠습니다.