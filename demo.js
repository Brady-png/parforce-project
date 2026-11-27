"use strict";

function setupParticleBackdrop() {
  const banner = document.querySelector(".hero-banner");
  const toggle = banner.querySelector(".motion-toggle");
  const clips = [...banner.querySelectorAll(".particle-track video")];
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  let enabled = !preference.matches;
  let visible = false;

  function update() {
    const playing = enabled && visible && !document.hidden;
    banner.classList.toggle("is-moving", playing);
    toggle.textContent = enabled ? "Pause" : "Continue";
    toggle.setAttribute("aria-label", toggle.textContent + " particle background");
    for (const clip of clips) {
      if (playing) {
        if (!clip.hasAttribute("src")) clip.src = clip.dataset.src;
        clip.play().catch(() => {});
      } else {
        clip.pause();
      }
    }
  }

  toggle.addEventListener("click", () => {
    enabled = !enabled;
    update();
  });
  preference.addEventListener("change", event => {
    enabled = !event.matches;
    update();
  });
  document.addEventListener("visibilitychange", update);
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    update();
  });
  observer.observe(banner);
  toggle.hidden = false;
  update();
}

setupParticleBackdrop();

const galleryNotes = {
  teacher: "Each column shows the method’s conditions above its generated video. Optical flow and point trajectories are visualized for playback.",
  "sim-to-real": "Simulations provide aligned particle and depth supervision. Real videos contribute natural appearance and dynamics to help close the sim-to-real gap. We compare simulation-only training with a 1:1 mix of simulated examples and real RGB–depth pairs on Wan2.1-Fun 1.3B, using the same training budget and inference inputs. Real training clips use depth supervision and zeroed particle latents.",
  student: "For selected examples, a vision-language model (VLM) predicts a description of future motion from the first frame and initial text. Every method receives the same description. This lets us assess the visual priors learned from the teacher separately from the ability to predict physical motion.",
};

const studentCases = [...galleryCases["physics-iq"], ...galleryCases.student];

function casesForGroup(group) {
  return group === "student" ? studentCases : galleryCases[group];
}

function panel(item) {
  const figure = document.createElement("figure");
  const caption = document.createElement("figcaption");
  caption.textContent = item.label;
  const isVideo = item.src.endsWith(".mp4");
  const content = document.createElement(isVideo ? "video" : "img");
  if (isVideo) {
    content.controls = true;
    content.playsInline = true;
    content.muted = true;
    content.preload = "metadata";
    content.setAttribute("aria-label", item.label);
    if (item.poster) content.poster = item.poster;
    if (item.width && item.height) {
      content.style.setProperty("--video-aspect", item.width / item.height);
    }
  } else {
    content.alt = item.label;
    content.decoding = "async";
  }
  content.src = item.src;
  figure.append(caption, content);
  return figure;
}

function fitShowcaseColumns(media, conditions, output) {
  // Equalize the native video heights after accounting for the extra captions on the left.
  const heightPerWidth = conditions.reduce((sum, item) => sum + item.height / item.width, 0);
  const outputAspect = output.width / output.height;
  const controlShare = 1 / (1 + outputAspect * heightPerWidth);
  media.style.setProperty("--control-share", controlShare * 100 + "%");
  media.style.setProperty("--control-fraction", controlShare);
  media.style.setProperty("--caption-weight", outputAspect * controlShare * (conditions.length - 1));
}

const shortConditionLabels = {
  "Particles (PSS)": "Particles",
  "Surface depth (SDS)": "Depth",
  "Visible point tracks": "Point tracks",
  "Rendered RGB proxy": "RGB proxy",
  "Simulation render": "RGB proxy",
  "Driving optical flow": "Optical flow",
  "Optical flow for noise warping": "Optical flow",
  "Sparse trajectories": "Trajectories",
  "Sparse point trajectories": "Trajectories",
};

function teacherPanel(output, conditions) {
  const column = document.createElement("article");
  column.className = "teacher-column";
  const heading = document.createElement("h4");
  heading.textContent = output.label;
  const controls = document.createElement("div");
  controls.className = "teacher-controls";
  if (conditions.length) {
    controls.append(...conditions.map(condition => {
      const tile = panel(condition);
      tile.querySelector("video")?.removeAttribute("controls");
      const caption = tile.querySelector("figcaption");
      caption.textContent = shortConditionLabels[condition.label] || condition.label;
      caption.title = condition.label;
      tile.append(caption);
      return tile;
    }));
  } else {
    const unavailable = document.createElement("p");
    unavailable.textContent = "Condition preview unavailable";
    controls.append(unavailable);
  }
  const result = panel({ ...output, label: "Generated video" });
  result.className = "teacher-result";
  result.querySelector("video")?.setAttribute("aria-label", output.label + " generated video");
  column.append(heading, controls, result);
  return column;
}

function setupGallery(gallery) {
  const defaultGroup = gallery.dataset.gallery;
  const galleryButtons = [...gallery.querySelectorAll("[data-group]")];
  const scenes = gallery.querySelector(".scenes");
  const media = gallery.querySelector(".case-media");
  const inputs = gallery.querySelector(".input-grid");
  const outputs = gallery.querySelector(".result-grid");
  const playback = gallery.querySelector("[data-play]");
  const pauseButton = gallery.querySelector("[data-pause]");
  const playbackControls = gallery.querySelector(".playback-controls");
  const initial = gallery.querySelector(".initial-grid");
  const caseContext = gallery.querySelector(".case-context");
  const galleryNote = gallery.querySelector(".gallery-note");
  const caseNote = gallery.querySelector(".case-note");
  let activeGroup;

  function videos() {
    return [...media.querySelectorAll("video")];
  }

  function updatePlayback() {
    const clips = videos();
    const playing = clips.some(video => !video.paused && !video.ended);
    const resumable = clips.some(video => video.currentTime > 0 && !video.ended);
    pauseButton.textContent = !playing && resumable ? "Continue" : "Pause";
    pauseButton.disabled = !playing && !resumable;
  }

  function show(item) {
    videos().forEach(video => video.pause());
    const teacherConditions = activeGroup === "teacher" ? item.conditions : null;
    const showcase = activeGroup === "showcase";
    media.classList.toggle("showcase-media", showcase);
    media.classList.toggle("teaser-comparison", activeGroup === "teacher" && item.id === "parforce-dominoes");
    media.classList.toggle("macaron-comparison", activeGroup === "teacher" && item.id === "macarons");
    for (const button of scenes.querySelectorAll("button")) {
      button.setAttribute("aria-pressed", String(button.dataset.scene === item.id));
    }
    gallery.querySelector(".case-title").textContent = item.title;
    gallery.querySelector(".case-prompt").textContent = item.prompt;
    caseNote.textContent = item.note || "";
    caseNote.hidden = !item.note;
    caseNote.classList.toggle("case-score", item.id === "roll-into-box");

    const sourcePanels = item.inputs || [];
    const firstFrame = sourcePanels.find(item => item.label === "Initial frame");
    initial.replaceChildren(...(firstFrame ? [panel(firstFrame)] : []));
    caseContext.classList.toggle("has-first-frame", Boolean(firstFrame));
    const sharedPanels = teacherConditions ? [] : sourcePanels.filter(item => item !== firstFrame);
    inputs.style.setProperty("--columns", sharedPanels.length);
    inputs.dataset.count = sharedPanels.length;
    inputs.replaceChildren(...sharedPanels.map(panel));
    const shownOutputs = showcase ? [{ ...item.outputs[0], label: "ParForce" }] : item.outputs;
    if (showcase) fitShowcaseColumns(media, sharedPanels, shownOutputs[0]);
    outputs.style.setProperty("--columns", shownOutputs.length);
    outputs.dataset.count = shownOutputs.length;
    outputs.replaceChildren(...shownOutputs.map(output => teacherConditions
      ? teacherPanel(output, teacherConditions[output.label] || [])
      : panel(output)));

    playbackControls.hidden = videos().length === 0;
    updatePlayback();
  }

  function selectGroup(group) {
    if (activeGroup === group) return;
    activeGroup = group;
    gallery.dataset.activeGroup = group;
    media.classList.toggle("comparison-media", group !== "showcase");
    for (const button of galleryButtons) {
      button.setAttribute("aria-pressed", String(button.dataset.group === group));
    }
    galleryNote.textContent = galleryNotes[group] || "";
    galleryNote.hidden = !galleryNotes[group];
    const cases = casesForGroup(group);
    scenes.replaceChildren(...cases.map(item => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.scene = item.id;
      button.textContent = item.title;
      button.addEventListener("click", () => show(item));
      return button;
    }));
    show(cases[0]);
  }

  scenes.addEventListener("keydown", event => {
    if (activeGroup !== "showcase") return;
    const current = event.target.closest("button");
    if (!current) return;
    const next = event.key === "ArrowDown" ? current.nextElementSibling
      : event.key === "ArrowUp" ? current.previousElementSibling
      : null;
    if (!next) return;
    event.preventDefault();
    next.click();
    next.focus();
  });

  for (const event of ["play", "pause", "ended", "seeked"]) {
    media.addEventListener(event, updatePlayback, true);
  }

  playback.addEventListener("click", () => {
    videos().forEach(video => {
      video.currentTime = 0;
      video.play().catch(updatePlayback);
    });
    updatePlayback();
  });

  pauseButton.addEventListener("click", () => {
    const clips = videos();
    if (clips.some(video => !video.paused && !video.ended)) {
      clips.forEach(video => video.pause());
    } else {
      clips.filter(video => !video.ended).forEach(video => video.play().catch(updatePlayback));
    }
    updatePlayback();
  });

  for (const button of galleryButtons) {
    button.addEventListener("click", () => {
      selectGroup(button.dataset.group);
      const hash = "#" + button.id;
      if (location.hash !== hash) history.pushState(null, "", hash);
    });
  }

  function showLinkedGroup() {
    const [galleryId, sceneId] = location.hash.slice(1).split("/");
    const button = galleryButtons.find(button => button.id === galleryId);
    const studentLink = defaultGroup === "student" && ["student-comparisons", "physics-iq"].includes(galleryId);
    const group = studentLink ? "student" : button?.dataset.group;
    if (!group) return;
    selectGroup(group);
    const linkedScene = sceneId || (galleryId === "physics-iq" ? "roll-into-box" : null);
    const item = casesForGroup(group).find(item => item.id === linkedScene);
    if (item) {
      show(item);
      gallery.closest("section").scrollIntoView();
    }
  }

  window.addEventListener("hashchange", showLinkedGroup);
  showLinkedGroup();
  if (!activeGroup) selectGroup(defaultGroup);
}

document.querySelectorAll("[data-gallery]").forEach(setupGallery);
