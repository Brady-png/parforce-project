const galleryCases = {
  "teacher": [
    {
      "id": "dominoes",
      "title": "Dominoes",
      "prompt": "Initial Scene: A straight row of six wooden domino blocks rests on a flat beige surface. The blocks alternate between blue and orange colors with vertical ridges. The first block is tilted forward while the remaining five stand upright.\nExternal Force: Begin with the first domino tilted forward and the remaining five dominoes upright and at rest. Apply downward gravity. Keep only the ground fixed; leave all six dominoes free.",
      "section": "Main paper",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/dominoes/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/paper-qualitative/dominoes/inputs-2.mp4",
          "poster": "assets/paper-qualitative/dominoes/inputs-2.jpg"
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/paper-qualitative/dominoes/inputs-3.mp4",
          "poster": "assets/paper-qualitative/dominoes/inputs-3.jpg"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/dominoes/videos-1.mp4",
          "poster": "assets/paper-qualitative/dominoes/videos-1.jpg",
          "provenance": "replay_selected_for_color_and_motion"
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/paper-qualitative/dominoes/videos-2.mp4",
          "poster": "assets/paper-qualitative/dominoes/videos-2.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "RealWonder",
          "src": "assets/paper-qualitative/dominoes/videos-3.mp4",
          "poster": "assets/paper-qualitative/dominoes/videos-3.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/paper-qualitative/dominoes/videos-4.mp4",
          "poster": "assets/paper-qualitative/dominoes/videos-4.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "Tora",
          "src": "assets/paper-qualitative/dominoes/videos-5.mp4",
          "poster": "assets/paper-qualitative/dominoes/videos-5.jpg",
          "provenance": "same_case_replay"
        }
      ],
      "conditions": {
        "Ours": [
          {
            "label": "Particles (PSS)",
            "src": "assets/paper-qualitative/dominoes/inputs-2.mp4",
            "poster": "assets/paper-qualitative/dominoes/inputs-2.jpg"
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/paper-qualitative/dominoes/inputs-3.mp4",
            "poster": "assets/paper-qualitative/dominoes/inputs-3.jpg"
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Point tracks",
            "src": "assets/teacher-conditions/dominoes/gwtt-tracks.mp4",
            "poster": "assets/teacher-conditions/dominoes/gwtt-tracks.jpg"
          }
        ],
        "RealWonder": [
          {
            "label": "Simulation render",
            "src": "assets/teacher-conditions/dominoes/realwonder-proxy.mp4",
            "poster": "assets/teacher-conditions/dominoes/realwonder-proxy.jpg"
          },
          {
            "label": "Optical flow for noise warping",
            "src": "assets/teacher-conditions/dominoes/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/dominoes/realwonder-flow.jpg"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Optical flow for noise warping",
            "src": "assets/teacher-conditions/dominoes/gwtf-flow.mp4",
            "poster": "assets/teacher-conditions/dominoes/gwtf-flow.jpg"
          }
        ],
        "Tora": [
          {
            "label": "Sparse trajectories",
            "src": "assets/teacher-conditions/dominoes/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/dominoes/tora-tracks.jpg"
          }
        ]
      },
      "conditionProvenance": {
        "Go-with-the-Track": {
          "official_loader_replay": true,
          "archived_preview_hash_matches": true
        },
        "RealWonder": "Archived simulation render and hash-verified motion field.",
        "Go-with-the-Flow": "Hash-verified motion field.",
        "Tora": "Hash-verified input trajectories."
      }
    },
    {
      "id": "curtain",
      "title": "Curtain",
      "prompt": "Initial Scene: A light brown curtain hangs beside a large open window overlooking a garden, with its upper edge attached above the frame.\nExternal Force: A strong gust of wind blows inward through the open window onto the curtain. Keep its upper attachments fixed. Fixed camera.",
      "section": "Main paper",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/curtain/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/paper-qualitative/curtain/inputs-2.mp4",
          "poster": "assets/paper-qualitative/curtain/inputs-2.jpg"
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/paper-qualitative/curtain/inputs-3.mp4",
          "poster": "assets/paper-qualitative/curtain/inputs-3.jpg"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/curtain/videos-1.mp4",
          "poster": "assets/paper-qualitative/curtain/videos-1.jpg",
          "provenance": "archived_letterbox_run"
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/paper-qualitative/curtain/videos-2.mp4",
          "poster": "assets/paper-qualitative/curtain/videos-2.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "RealWonder",
          "src": "assets/paper-qualitative/curtain/videos-3.mp4",
          "poster": "assets/paper-qualitative/curtain/videos-3.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/paper-qualitative/curtain/videos-4.mp4",
          "poster": "assets/paper-qualitative/curtain/videos-4.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "Tora",
          "src": "assets/paper-qualitative/curtain/videos-5.mp4",
          "poster": "assets/paper-qualitative/curtain/videos-5.jpg",
          "provenance": "same_case_replay"
        }
      ],
      "conditions": {
        "Ours": [
          {
            "label": "Particles (PSS)",
            "src": "assets/paper-qualitative/curtain/inputs-2.mp4",
            "poster": "assets/paper-qualitative/curtain/inputs-2.jpg"
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/paper-qualitative/curtain/inputs-3.mp4",
            "poster": "assets/paper-qualitative/curtain/inputs-3.jpg"
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Point tracks",
            "src": "assets/teacher-conditions/curtain/gwtt-tracks.mp4",
            "poster": "assets/teacher-conditions/curtain/gwtt-tracks.jpg"
          }
        ],
        "RealWonder": [
          {
            "label": "Simulation render",
            "src": "assets/teacher-conditions/curtain/realwonder-proxy.mp4",
            "poster": "assets/teacher-conditions/curtain/realwonder-proxy.jpg"
          },
          {
            "label": "Optical flow for noise warping",
            "src": "assets/teacher-conditions/curtain/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/curtain/realwonder-flow.jpg"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Optical flow for noise warping",
            "src": "assets/teacher-conditions/curtain/gwtf-flow.mp4",
            "poster": "assets/teacher-conditions/curtain/gwtf-flow.jpg"
          }
        ],
        "Tora": [
          {
            "label": "Sparse trajectories",
            "src": "assets/teacher-conditions/curtain/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/curtain/tora-tracks.jpg"
          }
        ]
      },
      "conditionProvenance": {
        "Go-with-the-Track": {
          "official_loader_replay": true,
          "archived_preview_hash_matches": true
        },
        "RealWonder": "Archived simulation render and hash-verified motion field.",
        "Go-with-the-Flow": "Hash-verified motion field.",
        "Tora": "Hash-verified input trajectories."
      }
    },
    {
      "id": "cloth-over-teapot",
      "title": "Cloth over teapot",
      "prompt": "Initial Scene: A pale green teapot sits on a white table, covered by a square sheet of light yellow cloth. Pink drawers are visible in the background.\nExternal Force: Disengage the support from the soft cloth above the complete teapot.",
      "section": "Appendix",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/cloth-over-teapot/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/paper-qualitative/cloth-over-teapot/inputs-2.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/inputs-2.jpg"
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/paper-qualitative/cloth-over-teapot/inputs-3.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/inputs-3.jpg"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/cloth-over-teapot/videos-1.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/videos-1.jpg",
          "provenance": "replay_selected_for_occlusion"
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/paper-qualitative/cloth-over-teapot/videos-2.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/videos-2.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "RealWonder",
          "src": "assets/paper-qualitative/cloth-over-teapot/videos-3.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/videos-3.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/paper-qualitative/cloth-over-teapot/videos-4.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/videos-4.jpg",
          "provenance": "same_case_replay"
        },
        {
          "label": "Tora",
          "src": "assets/paper-qualitative/cloth-over-teapot/videos-5.mp4",
          "poster": "assets/paper-qualitative/cloth-over-teapot/videos-5.jpg",
          "provenance": "same_case_replay"
        }
      ],
      "conditions": {
        "Ours": [
          {
            "label": "Particles (PSS)",
            "src": "assets/paper-qualitative/cloth-over-teapot/inputs-2.mp4",
            "poster": "assets/paper-qualitative/cloth-over-teapot/inputs-2.jpg"
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/paper-qualitative/cloth-over-teapot/inputs-3.mp4",
            "poster": "assets/paper-qualitative/cloth-over-teapot/inputs-3.jpg"
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Visible point tracks",
            "src": "assets/teacher-conditions/cloth-over-teapot/gwwt-tracks.mp4",
            "poster": "assets/teacher-conditions/cloth-over-teapot/gwwt-tracks.jpg",
            "receipt": "Exact official loader preview verified against its inference receipt.",
            "sourceSha256": "5eeb9af24a31a8afd9dea304e7b9567987e8ec7814d6049fb5e82b5caebe73b9"
          }
        ],
        "RealWonder": [
          {
            "label": "Rendered RGB proxy",
            "src": "assets/teacher-conditions/cloth-over-teapot/realwonder-rgb-proxy.mp4",
            "poster": "assets/teacher-conditions/cloth-over-teapot/realwonder-rgb-proxy.jpg",
            "receipt": "Synthetic RGB input from the archived conditioning pack.",
            "sourceSha256": "7dc1433a48ab63024734e1e3ca1792cb06d93d88aed90121507d3c56e34d9fa8"
          },
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/cloth-over-teapot/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/cloth-over-teapot/realwonder-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "7dc1433a48ab63024734e1e3ca1792cb06d93d88aed90121507d3c56e34d9fa8"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/cloth-over-teapot/gwf-flow.mp4",
            "poster": "assets/teacher-conditions/cloth-over-teapot/gwf-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "4aec35fb1d9d01c38413e7494b899e68c18067764fecbfbcd7ceb2900626a459"
          }
        ],
        "Tora": [
          {
            "label": "Sparse point trajectories",
            "src": "assets/teacher-conditions/cloth-over-teapot/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/cloth-over-teapot/tora-tracks.jpg",
            "receipt": "Rendered from the model input coordinates captured in the inference receipt.",
            "sourceTrackSha256": {
              "00.txt": "4501280d0d640c97c9390b2e5785d6c9d292db3eac86990512453fa2ea224f05",
              "01.txt": "246486767228c2f5df649a3f3ea05c30943877781b7f3b9aa3dd3ccc12f89eff",
              "02.txt": "115d9556db9b5e3559532c07dc2f2a9b194add0232e0ee0291a8b2f0f47ea137",
              "03.txt": "fbef345b5233c70c7f3b8386aa757ba8fd305c082567a0733d81ccb9affd5580",
              "04.txt": "ecf30d7579d4265b3006f05bce5ae544f2ee6e14df8f0aa629baf2130c174fe6",
              "05.txt": "916c6d57608c6a23370ca979b02abcef005e46e59070332f9aca3290ae5ed57a",
              "06.txt": "2609dc5808c205afe0056a73b02d04f3ebf27aa7e4534134c7e2a17ad56b5d7a",
              "07.txt": "52e75d4f36312ee4a60b93d5fdbe033d49e73f35538cc187460fa690b2777614"
            }
          }
        ]
      }
    },
    {
      "id": "macarons",
      "title": "Macarons",
      "prompt": "Initial Scene: Three macarons are stacked on a plate: a pink macaron on top, a green macaron in the middle, and a yellow macaron at the bottom. The camera is fixed. External Force: Give the plate a quick pull away from the camera, then let go.",
      "section": "Main paper",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/macarons/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/paper-qualitative/macarons/inputs-2.mp4",
          "poster": "assets/paper-qualitative/macarons/inputs-2.jpg"
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/paper-qualitative/macarons/inputs-3.mp4",
          "poster": "assets/paper-qualitative/macarons/inputs-3.jpg"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/teacher-conditions/macarons/ours-output.mp4",
          "poster": "assets/teacher-conditions/macarons/ours-output.jpg",
          "width": 480,
          "height": 270
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/teacher-conditions/macarons/gwtt-output.mp4",
          "poster": "assets/teacher-conditions/macarons/gwtt-output.jpg",
          "width": 480,
          "height": 270
        },
        {
          "label": "RealWonder",
          "src": "assets/teacher-conditions/macarons/realwonder-output.mp4",
          "poster": "assets/teacher-conditions/macarons/realwonder-output.jpg",
          "width": 480,
          "height": 270
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/teacher-conditions/macarons/gwtf-output.mp4",
          "poster": "assets/teacher-conditions/macarons/gwtf-output.jpg",
          "width": 480,
          "height": 270
        },
        {
          "label": "Tora",
          "src": "assets/teacher-conditions/macarons/tora-output.mp4",
          "poster": "assets/teacher-conditions/macarons/tora-output.jpg",
          "width": 480,
          "height": 270
        }
      ],
      "archivedComparison": {
        "label": "Five-model comparison",
        "src": "assets/paper-qualitative/macarons/videos-1.mp4",
        "poster": "assets/paper-qualitative/macarons/videos-1.jpg",
        "provenance": "paper_figure_source",
        "width": 2400,
        "height": 380
      },
      "conditions": {
        "Ours": [
          {
            "label": "Particles (PSS)",
            "src": "assets/paper-qualitative/macarons/inputs-2.mp4",
            "poster": "assets/paper-qualitative/macarons/inputs-2.jpg"
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/paper-qualitative/macarons/inputs-3.mp4",
            "poster": "assets/paper-qualitative/macarons/inputs-3.jpg"
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Point tracks",
            "src": "assets/teacher-conditions/macarons/gwtt-tracks.mp4",
            "poster": "assets/teacher-conditions/macarons/gwtt-tracks.jpg"
          }
        ],
        "RealWonder": [
          {
            "label": "Rendered RGB proxy",
            "src": "assets/teacher-conditions/macarons/realwonder-rgb-proxy.mp4",
            "poster": "assets/teacher-conditions/macarons/realwonder-rgb-proxy.jpg"
          },
          {
            "label": "Optical flow for noise warping",
            "src": "assets/teacher-conditions/macarons/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/macarons/realwonder-flow.jpg"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Optical flow for noise warping",
            "src": "assets/teacher-conditions/macarons/gwtf-flow.mp4",
            "poster": "assets/teacher-conditions/macarons/gwtf-flow.jpg"
          }
        ],
        "Tora": [
          {
            "label": "Sparse trajectories",
            "src": "assets/teacher-conditions/macarons/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/macarons/tora-tracks.jpg"
          }
        ]
      },
      "conditionProvenance": {
        "outputs": "The panels were extracted from the archived matched comparison and retain its original insets.",
        "Go-with-the-Track": "The original condition inset was extracted from the same archived comparison.",
        "RealWonder": "Archived flow visualization.",
        "Go-with-the-Flow": "Archived flow visualization.",
        "Tora": "Hash-verified input trajectories."
      }
    },
    {
      "id": "book-pull",
      "title": "Pull books",
      "prompt": "Initial Scene: A stack of closed books rests on a woven chair seat. External Force: Pull the bottom book strongly toward the left.",
      "section": "Appendix",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/book-pull/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/paper-qualitative/book-pull/inputs-2.mp4",
          "poster": "assets/paper-qualitative/book-pull/inputs-2.jpg"
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/paper-qualitative/book-pull/inputs-3.mp4",
          "poster": "assets/paper-qualitative/book-pull/inputs-3.jpg"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/book-pull/videos-1.mp4",
          "poster": "assets/paper-qualitative/book-pull/videos-1.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/paper-qualitative/book-pull/videos-2.mp4",
          "poster": "assets/paper-qualitative/book-pull/videos-2.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "RealWonder",
          "src": "assets/paper-qualitative/book-pull/videos-3.mp4",
          "poster": "assets/paper-qualitative/book-pull/videos-3.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/paper-qualitative/book-pull/videos-4.mp4",
          "poster": "assets/paper-qualitative/book-pull/videos-4.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "Tora",
          "src": "assets/paper-qualitative/book-pull/videos-5.mp4",
          "poster": "assets/paper-qualitative/book-pull/videos-5.jpg",
          "provenance": "paper_figure_source"
        }
      ],
      "conditions": {
        "Ours": [
          {
            "label": "Particles (PSS)",
            "src": "assets/paper-qualitative/book-pull/inputs-2.mp4",
            "poster": "assets/paper-qualitative/book-pull/inputs-2.jpg"
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/paper-qualitative/book-pull/inputs-3.mp4",
            "poster": "assets/paper-qualitative/book-pull/inputs-3.jpg"
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Visible point tracks",
            "src": "assets/teacher-conditions/book-pull/gwwt-tracks.mp4",
            "poster": "assets/teacher-conditions/book-pull/gwwt-tracks.jpg",
            "receipt": "Exact official loader preview verified against its inference receipt.",
            "sourceSha256": "4c7725ec8fb0e8af07a225f0cc3add315f8b1aa6586832f18ba010a41314486b"
          }
        ],
        "RealWonder": [
          {
            "label": "Rendered RGB proxy",
            "src": "assets/teacher-conditions/book-pull/realwonder-rgb-proxy.mp4",
            "poster": "assets/teacher-conditions/book-pull/realwonder-rgb-proxy.jpg",
            "receipt": "Synthetic RGB input from the archived conditioning pack.",
            "sourceSha256": "1c4f85ae13813ff6ce68b359e6bb0b0276cdedc1f56746210b4022843fb080ae"
          },
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/book-pull/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/book-pull/realwonder-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "1c4f85ae13813ff6ce68b359e6bb0b0276cdedc1f56746210b4022843fb080ae"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/book-pull/gwf-flow.mp4",
            "poster": "assets/teacher-conditions/book-pull/gwf-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "c9fdef4a3760e17346b3a63b3c9cc037c1f341b1018722ef8343408872a72656"
          }
        ],
        "Tora": [
          {
            "label": "Sparse point trajectories",
            "src": "assets/teacher-conditions/book-pull/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/book-pull/tora-tracks.jpg",
            "receipt": "Rendered from the model input coordinates captured in the inference receipt.",
            "sourceTrackSha256": {
              "00.txt": "95f310e0aeac355b80f9ac479c8d994004a4a25a73186543779be8b7a28f0194",
              "01.txt": "39afd469ad2de5ae46921a14a2ae00a7309c1f5b726ac590fbd308c852ea448b",
              "02.txt": "ed8228e269b66a10a2ad791fc1d7aafca764aa46b71fdd56eea395b3e83bd8ed",
              "03.txt": "4155660e6dd5b7f7e3c7b22d184f8e30072a1576a009e0533ad4e8a4547b2573",
              "04.txt": "b1ab223154f6c305184f4cc94eb80cdb9c33513c86d94b175633e0d96e4d5baf",
              "05.txt": "a185113b5a5bcf06c501c313ecdcadb1257fb1e047f1ef0d89a29ba0ea14d618",
              "06.txt": "6955ac682f4d7242c4b91e6b3e1a0e9e939451b41c99e809cf310a8ed71815b9",
              "07.txt": "30827588109dcac4566c363a8920c20dd171cebfc98499d893c814101ad7ad14"
            }
          }
        ]
      }
    },
    {
      "id": "turquoise-cup",
      "title": "Turquoise cup push",
      "prompt": "Initial Scene: Several reusable pastel cups and a separate lid rest on a pale table. External Force: Give the upright turquoise cup a controlled push toward the right.",
      "section": "Appendix",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/turquoise-cup/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/paper-qualitative/turquoise-cup/inputs-2.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/inputs-2.jpg"
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/paper-qualitative/turquoise-cup/inputs-3.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/inputs-3.jpg"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/turquoise-cup/videos-1.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/videos-1.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/paper-qualitative/turquoise-cup/videos-2.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/videos-2.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "RealWonder",
          "src": "assets/paper-qualitative/turquoise-cup/videos-3.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/videos-3.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/paper-qualitative/turquoise-cup/videos-4.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/videos-4.jpg",
          "provenance": "paper_figure_source"
        },
        {
          "label": "Tora",
          "src": "assets/paper-qualitative/turquoise-cup/videos-5.mp4",
          "poster": "assets/paper-qualitative/turquoise-cup/videos-5.jpg",
          "provenance": "paper_figure_source"
        }
      ],
      "conditions": {
        "Ours": [
          {
            "label": "Particles (PSS)",
            "src": "assets/paper-qualitative/turquoise-cup/inputs-2.mp4",
            "poster": "assets/paper-qualitative/turquoise-cup/inputs-2.jpg"
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/paper-qualitative/turquoise-cup/inputs-3.mp4",
            "poster": "assets/paper-qualitative/turquoise-cup/inputs-3.jpg"
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Visible point tracks",
            "src": "assets/teacher-conditions/turquoise-cup/gwwt-tracks.mp4",
            "poster": "assets/teacher-conditions/turquoise-cup/gwwt-tracks.jpg",
            "receipt": "Exact official loader preview verified against its inference receipt.",
            "sourceSha256": "60d33eba5b1fe40c94f1e611efefdb19166c613abbf06f997c29d85b47b56c2c"
          }
        ],
        "RealWonder": [
          {
            "label": "Rendered RGB proxy",
            "src": "assets/teacher-conditions/turquoise-cup/realwonder-rgb-proxy.mp4",
            "poster": "assets/teacher-conditions/turquoise-cup/realwonder-rgb-proxy.jpg",
            "receipt": "Synthetic RGB input from the archived conditioning pack.",
            "sourceSha256": "b57202c95b463f208da1dd3d5d9b378bb3776f8b2d9984f25533992a5559024f"
          },
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/turquoise-cup/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/turquoise-cup/realwonder-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "b57202c95b463f208da1dd3d5d9b378bb3776f8b2d9984f25533992a5559024f"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/turquoise-cup/gwf-flow.mp4",
            "poster": "assets/teacher-conditions/turquoise-cup/gwf-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "6d0899475af9bcfd1e30d4e95646a1aab9bfbbc53dff0d975a2c8326eef0412c"
          }
        ],
        "Tora": [
          {
            "label": "Sparse point trajectories",
            "src": "assets/teacher-conditions/turquoise-cup/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/turquoise-cup/tora-tracks.jpg",
            "receipt": "Rendered from the model input coordinates captured in the inference receipt.",
            "sourceTrackSha256": {
              "00.txt": "7409e563903b24783cf853a4813f9c09c180fa5b66a888bd89a97393f2927b69",
              "01.txt": "d4b885a871fc2bfb9a6ae964d8975508be143359c5f4157f13ca6cd7ba9a3fa5",
              "02.txt": "7f8037f2889fd51b682dba200ed771cf0f1069ec6529556866446f4f11707240",
              "03.txt": "d6093e567d33bfe7bc2fc27b5c060bfeeb0483a4bcab15e85b18fa45ad938e46",
              "04.txt": "e4740490d21c7be622eee705be2c8de073f2b4890599881ca30a06ca70d9f47b",
              "05.txt": "e69ff2c3c2161cab20ed2e76719098072e8739197e82323a8e263c0c38840a17",
              "06.txt": "a0270f9e4f2f8f0663c8867725d954b9b8ee40f5add99828266e2ffa6d80db25",
              "07.txt": "dda0f33d694dbae63c60b84357ccef5f6f1f9f6047b467ebb8da7a06729b0745"
            }
          }
        ]
      }
    },
    {
      "id": "parforce-dominoes",
      "title": "ParForce dominoes",
      "prompt": "Initial Scene: Colored upright dominoes form the word ParForce on a light wooden tabletop.\nExternal Force: Push the upright dominoes from right toward the left. Fixed camera.",
      "section": "Additional comparison",
      "paper_page": 16,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/parforce-dominoes/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/parforce-dominoes/inputs-2.mp4",
          "poster": "assets/showcase/parforce-dominoes/inputs-2.jpg",
          "width": 960,
          "height": 540
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/parforce-dominoes/inputs-3.mp4",
          "poster": "assets/showcase/parforce-dominoes/inputs-3.jpg",
          "width": 960,
          "height": 540
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/parforce-dominoes/videos-1.mp4",
          "poster": "assets/showcase/parforce-dominoes/videos-1.jpg"
        },
        {
          "label": "Go-with-the-Track",
          "src": "assets/showcase/parforce-dominoes/videos-2.mp4",
          "poster": "assets/showcase/parforce-dominoes/videos-2.jpg"
        },
        {
          "label": "RealWonder",
          "src": "assets/showcase/parforce-dominoes/videos-3.mp4",
          "poster": "assets/showcase/parforce-dominoes/videos-3.jpg"
        },
        {
          "label": "Go-with-the-Flow",
          "src": "assets/showcase/parforce-dominoes/videos-4.mp4",
          "poster": "assets/showcase/parforce-dominoes/videos-4.jpg"
        },
        {
          "label": "Tora",
          "src": "assets/showcase/parforce-dominoes/videos-5.mp4",
          "poster": "assets/showcase/parforce-dominoes/videos-5.jpg"
        }
      ],
      "note": "All five methods use conditions derived from the same simulated geometry and motion.",
      "provenance": {
        "video": "original_motion_comparison",
        "source_input_sha256": {
          "first_frame": "5143659320f156be799a17bc72e30a7bcdba629c52c88271672bd2a95e6e7110",
          "particle_path": "73e0f779bfacfc5e788c5fa501cde7791f2d802870ed2a1235ecaf58f674174f",
          "depth_path": "2d4311c93e390636cce4c419eb34a3b527f383a3c2434abd7cba4693954fccba"
        },
        "native_video_sha256": "7556a123c0a24728d21f121b029bcd947db21514c0c543348b1a0c1983d5f2b4",
        "clips": [
          {
            "label": "Ours",
            "seed": 130,
            "native_video_sha256": "7556a123c0a24728d21f121b029bcd947db21514c0c543348b1a0c1983d5f2b4",
            "viewport_xywh": [
              0,
              30,
              576,
              324
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "Go-with-the-Track",
            "seed": 42,
            "native_video_sha256": "3dd86ad72a614bc971210c2e3efe176cf81dd4706d0ff236ebd7608bf4d1f331",
            "viewport_xywh": [
              0,
              38,
              832,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "RealWonder",
            "seed": 42,
            "native_video_sha256": "760f10039f82d34bd94a3eff0c3adc0976e4ac92f94019580be7c423ad8a5f25",
            "viewport_xywh": [
              0,
              38,
              832,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "Go-with-the-Flow",
            "seed": 42,
            "native_video_sha256": "96e0d0ab41ccfea00ed13307a671ae3664ffb17c73f000fc920993d43da18693",
            "viewport_xywh": [
              0,
              38,
              720,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "Tora",
            "seed": 42,
            "native_video_sha256": "83de0471ce3c5bd8955b86a1404a7c4c3557d3ea6c1dfe73bb68113baddd84d8",
            "viewport_xywh": [
              0,
              38,
              720,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          }
        ],
        "archive_sha256": {
          "inputs-1.png": "5143659320f156be799a17bc72e30a7bcdba629c52c88271672bd2a95e6e7110",
          "inputs-2.jpg": "f4b008d68dfd41b9f4e93490822f863bcc155f83b23a75a50b9031fbcd531644",
          "inputs-2.mp4": "ef737158bb4b4e0f7a75aa95f13c7eb81676d2ecd47bc686329fcba458d9df59",
          "inputs-3.jpg": "edefbc38c2a501188ab3ba727836e98fb5227aacbb61842adedac55fa491b969",
          "inputs-3.mp4": "6e58c63d7388577e551ec78166ef836798da46ef5da3714504ca6b576b7560c5",
          "videos-1.jpg": "e0e2276b8cf66d5425f93f9b683649b9b2d108c7e78893b084457d1fdd81ec1d",
          "videos-1.mp4": "b4bd69f747e3772f080e468ba3d04bd1c1e8c4c88f00d36be9b448b0287f90f7",
          "videos-2.jpg": "482cdd3ae93210a0886a5239e6baf62f5c3050ced4bdf3404a35aa1485554be8",
          "videos-2.mp4": "4aad8c94a2ec393a79d2d00a7bbdd70122c3a94544c29474e723bfd7f6dc3fc2",
          "videos-3.jpg": "f17e2db22c5a1da2b91bffe2613a62cc621102355081f9f2c80ee5f914ad9d34",
          "videos-3.mp4": "64771890663f3dad9bcf7d1d5b50a0ea29b037be97c5d6abef9a8e76fc66d6e6",
          "videos-4.jpg": "18097a5a3bb7463f34273c3575b623a647bc43ce6e586b2763293094f7058bbf",
          "videos-4.mp4": "35ffff59e233c2d8326b43fa62292c0dcd3989d0de5c5388f4637b4bea5ecbaf",
          "videos-5.jpg": "d011eb1188caa2a2f07996982234766277b5f998d17b32569e920894a888076a",
          "videos-5.mp4": "56b224c338a9fbe01b8eabecbc7ea75613435f1a58ce019de4c1b17f67b335ea"
        }
      },
      "conditions": {
        "ParForce": [
          {
            "label": "Particles (PSS)",
            "src": "assets/showcase/parforce-dominoes/inputs-2.mp4",
            "poster": "assets/showcase/parforce-dominoes/inputs-2.jpg",
          "width": 960,
          "height": 540
          },
          {
            "label": "Surface depth (SDS)",
            "src": "assets/showcase/parforce-dominoes/inputs-3.mp4",
            "poster": "assets/showcase/parforce-dominoes/inputs-3.jpg",
          "width": 960,
          "height": 540
          }
        ],
        "Go-with-the-Track": [
          {
            "label": "Visible point tracks",
            "src": "assets/teacher-conditions/parforce-dominoes/gwwt-tracks.mp4",
            "poster": "assets/teacher-conditions/parforce-dominoes/gwwt-tracks.jpg",
            "receipt": "Exact official loader preview verified against its inference receipt.",
            "sourceSha256": "f7209675567d4c724b4071eec55effb0d303b459f95699d50ac1c4a9cc93c6c5"
          }
        ],
        "RealWonder": [
          {
            "label": "Rendered RGB proxy",
            "src": "assets/teacher-conditions/parforce-dominoes/realwonder-rgb-proxy.mp4",
            "poster": "assets/teacher-conditions/parforce-dominoes/realwonder-rgb-proxy.jpg",
            "receipt": "Synthetic RGB input from the archived conditioning pack.",
            "sourceSha256": "168ee1d0777a0458a982afdd99daa6afe66cf25526104897ae5253b57458095d"
          },
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/parforce-dominoes/realwonder-flow.mp4",
            "poster": "assets/teacher-conditions/parforce-dominoes/realwonder-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "168ee1d0777a0458a982afdd99daa6afe66cf25526104897ae5253b57458095d"
          }
        ],
        "Go-with-the-Flow": [
          {
            "label": "Driving optical flow",
            "src": "assets/teacher-conditions/parforce-dominoes/gwf-flow.mp4",
            "poster": "assets/teacher-conditions/parforce-dominoes/gwf-flow.jpg",
            "receipt": "Color visualization of the archived flow used to warp noise.",
            "sourceSha256": "8519bc41d6dd9f2d55d5cd65207cdf8697cb8429e18924a88d3d9a54984aad4e"
          }
        ],
        "Tora": [
          {
            "label": "Sparse point trajectories",
            "src": "assets/teacher-conditions/parforce-dominoes/tora-tracks.mp4",
            "poster": "assets/teacher-conditions/parforce-dominoes/tora-tracks.jpg",
            "receipt": "Rendered from the model input coordinates captured in the inference receipt.",
            "sourceTrackSha256": {
              "00.txt": "65b6f581eb0b1c5df7e0662ba5c387b3f5d1de26ffac24108916895141cc7ca0",
              "01.txt": "a2673bbc0b651c4e5f232d20667a5aa6823efa800061d94c043e80bc3bf63452",
              "02.txt": "7aa9a471d3c7ed992cc43db3d7340f40e567c6622235267969d23ee8dd117b06",
              "03.txt": "edbf853c129d7fb060cab139b1dd428d0b5c142c5c74e3dfcea8f4cb3e8d6867",
              "04.txt": "77687ed2eeb3e01b5eae02603a8c5badbd996d52933e0389d88b1880fc46b554",
              "05.txt": "4c323c11d838ac3a172c02fd2b9293580d70045a2308a69870ad1a9e76855021",
              "06.txt": "480d2fab846c13e11768e137026a2ccbd58cacfb2727b7140741194966cce945",
              "07.txt": "d38fca4d4099a15a2fd8e2d2235628e91e88b182f828e7c0fda2e2a045dc8b28"
            }
          }
        ]
      }
    }
  ],
  "student": [
    {
      "id": "stacked-pebbles",
      "title": "Stacked pebbles",
      "prompt": "Rounded stones are balanced in a vertical stack on a beach. Gently push the top and lower stones in opposite directions. The top stone and selected lower stone move in opposite directions. The stack loses alignment, allowing upper stones to topple while the lower contacts rearrange. Fixed camera.",
      "section": "Main paper",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/stacked-pebbles/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/stacked-pebbles/videos-1.mp4",
          "poster": "assets/paper-qualitative/stacked-pebbles/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/stacked-pebbles/videos-2.mp4",
          "poster": "assets/paper-qualitative/stacked-pebbles/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/stacked-pebbles/videos-3.mp4",
          "poster": "assets/paper-qualitative/stacked-pebbles/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/stacked-pebbles/videos-4.mp4",
          "poster": "assets/paper-qualitative/stacked-pebbles/videos-4.jpg"
        }
      ]
    },
    {
      "id": "glass-marbles",
      "title": "Glass marbles",
      "prompt": "Six unnumbered glass marbles rest on a wooden tabletop. Push the rear marble toward the dark marble in the center. The selected marble or ball rolls in the instructed direction. A target ball gains motion only when their surfaces meet; the incoming ball slows or redirects at impact. With two inward pushes the balls approach and collide, while a push away from the group increases separation and need not disturb the others. All balls remain supported by the surface until an actual edge is reached. Fixed camera.",
      "section": "Main paper",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/glass-marbles/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/glass-marbles/videos-1.mp4",
          "poster": "assets/paper-qualitative/glass-marbles/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/glass-marbles/videos-2.mp4",
          "poster": "assets/paper-qualitative/glass-marbles/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/glass-marbles/videos-3.mp4",
          "poster": "assets/paper-qualitative/glass-marbles/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/glass-marbles/videos-4.mp4",
          "poster": "assets/paper-qualitative/glass-marbles/videos-4.jpg"
        }
      ]
    },
    {
      "id": "s2",
      "title": "Table-edge roll",
      "prompt": "The orange ball rolls away from the release tube along the open strip of tabletop. It passes in front of the stationary darker objects with a visible gap and keeps roughly the same heading. Its motion slows gradually over the wood. The nearby objects remain at their starting positions. Use the first frame as the starting state. Keep the camera locked in its original horizontal framing and show the described continuation in one continuous five-second shot.",
      "section": "Appendix",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/s2/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/s2/videos-1.mp4",
          "poster": "assets/paper-qualitative/s2/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/s2/videos-2.mp4",
          "poster": "assets/paper-qualitative/s2/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/s2/videos-3.mp4",
          "poster": "assets/paper-qualitative/s2/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/s2/videos-4.mp4",
          "poster": "assets/paper-qualitative/s2/videos-4.jpg"
        }
      ]
    },
    {
      "id": "s3",
      "title": "Ramp return",
      "prompt": "The green ball rolls from the tube along the tabletop toward the low edge of the brown ramp. It meets the incline and climbs a short distance, slowing as it rises. It turns back down the same surface and continues onto the table. The ramp and its blue support stay in place. Use the first frame as the starting state. Keep the camera locked in its original horizontal framing and show the described continuation in one continuous five-second shot.",
      "section": "Appendix",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/s3/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/s3/videos-1.mp4",
          "poster": "assets/paper-qualitative/s3/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/s3/videos-2.mp4",
          "poster": "assets/paper-qualitative/s3/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/s3/videos-3.mp4",
          "poster": "assets/paper-qualitative/s3/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/s3/videos-4.mp4",
          "poster": "assets/paper-qualitative/s3/videos-4.jpg"
        }
      ]
    },
    {
      "id": "s4",
      "title": "Toy collision",
      "prompt": "The dark ball rolls from the tube across the wooden tabletop toward the yellow toy. The toy stays still until the ball touches its lower side. The impact slows or deflects the ball and makes the toy slide or rotate briefly. Both slow down without leaving the tabletop. Use the first frame as the starting state. Keep the camera locked in its original horizontal framing and show the described continuation in one continuous five-second shot.",
      "section": "Appendix",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/s4/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/s4/videos-1.mp4",
          "poster": "assets/paper-qualitative/s4/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/s4/videos-2.mp4",
          "poster": "assets/paper-qualitative/s4/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/s4/videos-3.mp4",
          "poster": "assets/paper-qualitative/s4/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/s4/videos-4.mp4",
          "poster": "assets/paper-qualitative/s4/videos-4.jpg"
        }
      ]
    },
    {
      "id": "s5",
      "title": "Sphere off cylinder",
      "prompt": "A yellow sphere balances on blocks and cylinders beside a second dark block stack. Nudge the yellow sphere off the dark cylinder toward the clear foreground. It moves over the edge, falls with its shape intact and bounces once on the lower pale surface. The cylinder stack and the second group of blocks remain stationary. Use the first frame as the starting state. Keep the camera locked in the original horizontal framing, with the same background and lighting throughout one continuous five-second shot.",
      "section": "Appendix",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/s5/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/s5/videos-1.mp4",
          "poster": "assets/paper-qualitative/s5/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/s5/videos-2.mp4",
          "poster": "assets/paper-qualitative/s5/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/s5/videos-3.mp4",
          "poster": "assets/paper-qualitative/s5/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/s5/videos-4.mp4",
          "poster": "assets/paper-qualitative/s5/videos-4.jpg"
        }
      ]
    },
    {
      "id": "s6",
      "title": "Ball off block",
      "prompt": "A yellow ball sits at the edge of an upper block that overhangs a lower block. Let the yellow ball roll a short distance off the unsupported side of the upper block. It falls under gravity and makes a small bounce on the dark ground before rolling to a stop. Keep both blocks in place. Use the first frame as the starting state. Keep the camera locked in the original horizontal framing, with the same background and lighting throughout one continuous five-second shot.",
      "section": "Appendix",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/s6/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/s6/videos-1.mp4",
          "poster": "assets/paper-qualitative/s6/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/s6/videos-2.mp4",
          "poster": "assets/paper-qualitative/s6/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/s6/videos-3.mp4",
          "poster": "assets/paper-qualitative/s6/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/s6/videos-4.mp4",
          "poster": "assets/paper-qualitative/s6/videos-4.jpg"
        }
      ]
    },
    {
      "id": "s1",
      "title": "Kettlebell impact",
      "prompt": "The incoming gray ball rolls toward the black kettlebell between it and the yellow toy. It contacts the base of the weight, slows and rebounds or deflects sideways. The heavy weight stays in place and blocks the direct line to the toy. The toy stays at its starting position. Use the first frame as the starting state. Keep the camera locked in its original horizontal framing and show the described continuation in one continuous five-second shot.",
      "section": "Appendix",
      "note": "All four methods use the same first frame and continuation prompt.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/s1/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Ours",
          "src": "assets/paper-qualitative/s1/videos-1.mp4",
          "poster": "assets/paper-qualitative/s1/videos-1.jpg"
        },
        {
          "label": "H3 Turbo",
          "src": "assets/paper-qualitative/s1/videos-2.mp4",
          "poster": "assets/paper-qualitative/s1/videos-2.jpg"
        },
        {
          "label": "Wan2.2-TI2V-5B",
          "src": "assets/paper-qualitative/s1/videos-3.mp4",
          "poster": "assets/paper-qualitative/s1/videos-3.jpg"
        },
        {
          "label": "CogVideoX-5B-I2V",
          "src": "assets/paper-qualitative/s1/videos-4.mp4",
          "poster": "assets/paper-qualitative/s1/videos-4.jpg"
        }
      ]
    }
  ],
  "sim-to-real": [
    {
      "id": "water-pouring",
      "title": "Water pouring",
      "prompt": "Initial Scene: A short clear tumbler with a blue base stands on an outdoor wooden table against a softly blurred yard.\nExternal Force: Tilt a container holding water above the glass, with its outlet aimed into the glass opening. Fixed camera.",
      "section": "Main paper",
      "note": "Training with real videos produces a more natural water stream and a clearer rise in the water level.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/water-pouring/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Simulation only",
          "src": "assets/paper-qualitative/water-pouring/videos-1.mp4",
          "poster": "assets/paper-qualitative/water-pouring/videos-1.jpg"
        },
        {
          "label": "Simulation + real",
          "src": "assets/paper-qualitative/water-pouring/videos-2.mp4",
          "poster": "assets/paper-qualitative/water-pouring/videos-2.jpg"
        }
      ]
    },
    {
      "id": "floating-lantern",
      "title": "Floating lantern",
      "prompt": "Initial Scene: A glowing square paper lantern floats on a dark rippling river at night.\nExternal Force: Apply a gentle horizontal water current around the paper lantern on the river. Fixed camera.",
      "section": "Main paper",
      "note": "Training with real videos produces more natural ripple motion around the lantern.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/floating-lantern/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Simulation only",
          "src": "assets/paper-qualitative/floating-lantern/videos-1.mp4",
          "poster": "assets/paper-qualitative/floating-lantern/videos-1.jpg"
        },
        {
          "label": "Simulation + real",
          "src": "assets/paper-qualitative/floating-lantern/videos-2.mp4",
          "poster": "assets/paper-qualitative/floating-lantern/videos-2.jpg"
        }
      ]
    }
  ],
  "physics-iq": [
    {
      "id": "roll-into-box",
      "title": "Roll into box",
      "prompt": "Static locked-off single-shot with fixed frame throughout filmed with constant framerate in real-time. The scene shows a realistic scientific demonstration. The scene only contains the described setup and actions. The olive green fabric box is on a light wooden table and a black tube points from the left side to the right side. The brown tennis ball rolls from the left straight out of the black tube and hits the olive green fabric box.",
      "section": "Main paper",
      "note": "With the official benchmark prompt, ParForce scores 88.51 versus 26.52 for H3 Turbo4, a gain of 61.99 points. ParForce rolls one ball into the box and keeps the box stationary. H3 Turbo4 generates a second ball and later shifts and tilts the box.",
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/paper-qualitative/roll-into-box/inputs-1.png"
        }
      ],
      "outputs": [
        {
          "label": "Official-prompt comparison",
          "src": "assets/paper-qualitative/roll-into-box/videos-1.mp4",
          "poster": "assets/paper-qualitative/roll-into-box/videos-1.jpg",
          "width": 1920,
          "height": 604
        }
      ]
    }
  ],
  "showcase": [
    {
      "id": "milk-pour",
      "title": "Milk pour",
      "prompt": "Initial Scene: An empty blue-tinted faceted tumbler stands alone against a smooth pale-blue studio background.\nExternal Force: Tilt the pouring container to pour milk into the glass, with its outlet aimed into the glass opening. Fixed camera.",
      "section": "Appendix F.2",
      "paper_page": 16,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/milk-pour/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/milk-pour/inputs-2.mp4",
          "poster": "assets/showcase/milk-pour/inputs-2.jpg",
          "width": 384,
          "height": 256
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/milk-pour/inputs-3.mp4",
          "poster": "assets/showcase/milk-pour/inputs-3.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/milk-pour/videos-1.mp4",
          "poster": "assets/showcase/milk-pour/videos-1.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "b5239db77bf34e0429e92bf1fc9c37db37c7888463541d22bb2377734b48f03e",
        "archive_sha256": {
          "inputs-1.png": "b328632756ab273b615e835b13d1c36c458c39fb699f808362972e41f0779f58",
          "inputs-2.mp4": "5c66866fbed7c7c4557406399cf0ae3879fa2e88ee64f287f5f7d06acf632c22",
          "inputs-2.jpg": "8f5fa6e524d575e40e198a61fa88b6009a05597d901f28ba431efd299c09e1b9",
          "inputs-3.mp4": "a0e83f04a5e0d20e0355561966d66e650fa69356f5c8b7dbeb8ae2b87e894ac7",
          "inputs-3.jpg": "2d03e6dfa61957ac22f3537df66cf1bda8e66c4b7f8e60db4beec619e46783c0",
          "videos-1.mp4": "cf6a7f2d6069d9c6beb920a82880627d6f8de598d2b62fa00c0a39943c3a42d7",
          "videos-1.jpg": "cbf382072d790ba259f50eab9f8a15d2a53c043d53591d32079b8ff7e382d68c"
        }
      }
    },
    {
      "id": "red-wine-pour",
      "title": "Red wine pour",
      "prompt": "Initial Scene: An empty blue-tinted faceted tumbler stands alone against a smooth pale-blue studio background.\nExternal Force: Tilt the pouring container to pour red wine into the glass, with its outlet aimed into the glass opening. Fixed camera.",
      "section": "Appendix F.2",
      "paper_page": 16,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/red-wine-pour/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/red-wine-pour/inputs-2.mp4",
          "poster": "assets/showcase/red-wine-pour/inputs-2.jpg",
          "width": 384,
          "height": 256
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/red-wine-pour/inputs-3.mp4",
          "poster": "assets/showcase/red-wine-pour/inputs-3.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/red-wine-pour/videos-1.mp4",
          "poster": "assets/showcase/red-wine-pour/videos-1.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "d2412b3219501a71e79177d913ebda04451f8851902923cd0b83e85c6c3a43e0",
        "archive_sha256": {
          "inputs-1.png": "b328632756ab273b615e835b13d1c36c458c39fb699f808362972e41f0779f58",
          "inputs-2.mp4": "5c66866fbed7c7c4557406399cf0ae3879fa2e88ee64f287f5f7d06acf632c22",
          "inputs-2.jpg": "8f5fa6e524d575e40e198a61fa88b6009a05597d901f28ba431efd299c09e1b9",
          "inputs-3.mp4": "a0e83f04a5e0d20e0355561966d66e650fa69356f5c8b7dbeb8ae2b87e894ac7",
          "inputs-3.jpg": "2d03e6dfa61957ac22f3537df66cf1bda8e66c4b7f8e60db4beec619e46783c0",
          "videos-1.mp4": "43d8dee3c88a3e104ceadfa6a5a3ed6bf75848b2c16a47dc8025f2f3092eafae",
          "videos-1.jpg": "e1166fb6ae8818d4a48a9d732e68acc432dc1557c667ff2861553b53e1b1bef6"
        }
      }
    },
    {
      "id": "persimmons",
      "title": "Persimmon stack",
      "prompt": "Initial Scene: Three orange persimmons are stacked vertically on a pale pink surface against a pink background.\nExternal Force: Apply brief sideways pushes to the top and middle persimmons of the stack. Do not directly push the bottom persimmon. Fixed camera.",
      "section": "Appendix F.2",
      "paper_page": 16,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/persimmons/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/persimmons/inputs-2.mp4",
          "poster": "assets/showcase/persimmons/inputs-2.jpg",
          "width": 384,
          "height": 256
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/persimmons/inputs-3.mp4",
          "poster": "assets/showcase/persimmons/inputs-3.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/persimmons/videos-1.mp4",
          "poster": "assets/showcase/persimmons/videos-1.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "a02946263898f7a1f7a38e488322bbcdaf6b82bb07e143732258ba368e9752bc",
        "archive_sha256": {
          "inputs-1.png": "a0348db8ae2f24b8961253a3017a9b3122c23f1beaa260da3f93f4b122bae04b",
          "inputs-2.mp4": "3b810f056ad245b81528df4cc8b4a857c27fe1b138bb1b54d66d1eb5aaad9cdc",
          "inputs-2.jpg": "568052de91ab544e222fe7c4794556b642af1d81340c3dea2fb363a4d0d30198",
          "inputs-3.mp4": "f55aeb8642e7114e578004cdae377745881aa1f9e8b2066e4bbcd4731ab728ed",
          "inputs-3.jpg": "0435ee82bd680fd50ac474a8d25c3de725d6c4eebd138830932ce4b48cdd7a0f",
          "videos-1.mp4": "b2f6980a5deccc5f776b7b1f3a87e21894dac1d78b710679c48806f25f54afa7",
          "videos-1.jpg": "bd5217fb67b088db655f4d19ff8527ba3a21e5f24b20ca47e693bc0ed5af0027"
        }
      }
    },
    {
      "id": "blue-skirt",
      "title": "Blue skirt fold",
      "prompt": "Initial Scene: A light-blue flared skirt garment lies flat on a beige surface with its waistband at the top.\nExternal Force: Apply inward pulls at the two side edges of the skirt garment, then an upward pull at its lower edge. Fixed camera.",
      "section": "Appendix F.2",
      "paper_page": 16,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/blue-skirt/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/blue-skirt/inputs-2.mp4",
          "poster": "assets/showcase/blue-skirt/inputs-2.jpg",
          "width": 384,
          "height": 256
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/blue-skirt/inputs-3.mp4",
          "poster": "assets/showcase/blue-skirt/inputs-3.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/blue-skirt/videos-1.mp4",
          "poster": "assets/showcase/blue-skirt/videos-1.jpg",
          "width": 384,
          "height": 256
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "9f7b033a2b059dd29c681e41731746a0d991cbec29033aaf506f3d0b2bbfb420",
        "archive_sha256": {
          "inputs-1.png": "32d5b059d2370f41dc72ad1cb9a74c3e37462e97199cc9dfddd4d73b18152c40",
          "inputs-2.mp4": "d026752994ff1f90aa23b31078ff369e787a4cf9b0d085d5b8bb1d035fe787f7",
          "inputs-2.jpg": "9238f3d1aaf43cd768edafb7553b4703bbd98037eab591e436aee910753e7732",
          "inputs-3.mp4": "5125bc7880430b655d14bfcaabe7d2283f90cbc90af73e602615cedfe7e46717",
          "inputs-3.jpg": "eefeca4069e22cb006a631a0b704ada8d2434c0bdb6ea62e09a8a9602d144aa0",
          "videos-1.mp4": "deebb422086302b08fd5869ab47b90a9f82dda94e3f5bb64856216276d45c3b7",
          "videos-1.jpg": "97394f8493f90098f75f3d3cceed42dd53bd3098ba2ca91bb2ac661a07ebd621"
        }
      }
    },
    {
      "id": "ball-and-boards",
      "title": "Ball and upright boards",
      "prompt": "Initial Scene: A black ball, a pale slab with an upright slender stick, and two dark boards rest on a beige surface. External Force: Strike the black ball hard toward the nearer upright board.",
      "section": "Appendix F.2",
      "paper_page": 15,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/ball-and-boards/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/ball-and-boards/inputs-2.mp4",
          "poster": "assets/showcase/ball-and-boards/inputs-2.jpg",
          "width": 640,
          "height": 360
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/ball-and-boards/inputs-3.mp4",
          "poster": "assets/showcase/ball-and-boards/inputs-3.jpg",
          "width": 640,
          "height": 360
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/ball-and-boards/videos-1.mp4",
          "poster": "assets/showcase/ball-and-boards/videos-1.jpg",
          "width": 576,
          "height": 384
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "fbda85b9dbd50bf69879088070c4962a94b70cc762adc7ad3d7a249d0ad5bee9",
        "archive_sha256": {
          "inputs-1.png": "d3c49a14239d14d5e0589159aeb9846eb097e7c1bc650331f19305061c49a7cf",
          "inputs-2.mp4": "831c09fadb296868125816e145975c7cfd8801dd7fdce7eb26087b997be60a60",
          "inputs-2.jpg": "f0977eaca0419fb1c3ee4bba8f16d876f6515c9979034c05511af612a7f4d864",
          "inputs-3.mp4": "5f7b8eb358f1e92d5849eaa0aec4d614cb3db4b12f2147a42c2de44b3ff7ebfc",
          "inputs-3.jpg": "ed042fb4530b84c63c4a785bf73f1a08afc71b6436e67bd4aaaf91a1109585df",
          "videos-1.mp4": "2ef4c29ad1061f741d99215e8337b408765ba31b01ede2b386f11f694937407e",
          "videos-1.jpg": "458ce7228cc1247649419104f824ea1f3a0bdde6ccc327609cc03d88c672ca28"
        }
      }
    },
    {
      "id": "ball-and-bread",
      "title": "Ball and bread",
      "prompt": "Initial Scene: Two pale spheres and two pieces of bread rest on a tabletop. External Force: Push the left pale sphere toward the light bread.",
      "section": "Appendix F.2",
      "paper_page": 15,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/ball-and-bread/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/ball-and-bread/inputs-2.mp4",
          "poster": "assets/showcase/ball-and-bread/inputs-2.jpg",
          "width": 640,
          "height": 360
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/ball-and-bread/inputs-3.mp4",
          "poster": "assets/showcase/ball-and-bread/inputs-3.jpg",
          "width": 640,
          "height": 360
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/ball-and-bread/videos-1.mp4",
          "poster": "assets/showcase/ball-and-bread/videos-1.jpg",
          "width": 576,
          "height": 384
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "fca7a4759080cecbe35d32cfe91e804f66b766ba7a824551a5ed1e35a84811be",
        "archive_sha256": {
          "inputs-1.png": "10d26f760022b44220dbf533d079fa804b28b8dd11fc8ca47de5fe3bb2578940",
          "inputs-2.mp4": "8ce0aa57a447491da5b9109e5a5df7d324cbf7b36229699463cfc4ea318b0550",
          "inputs-2.jpg": "d13ddfac2e57ee002626ab52e7ff0afb20146fb8a712203317682af22a69e429",
          "inputs-3.mp4": "6ab26919d50cf4e8f79b6277c650b92ab5e0ca79ce9239325d17e24bb9d8eb4c",
          "inputs-3.jpg": "f3a7a5120fba14c911287fe444c706e753c7d03631bbc1313a8f504f380690ef",
          "videos-1.mp4": "1b3256947bc6e28a1c260bfb93ba723b55540113645da56ef3b9d0f4c65c8717",
          "videos-1.jpg": "4cdad8fdcb8ce11b31b24981dd00474086af4558886a1473d9c5e4a17d9e3636"
        }
      }
    },
    {
      "id": "die",
      "title": "Die on fabric",
      "prompt": "Initial Scene: A white die sits at an angle on a gray textured surface. External Force: Turn the die slightly to face the camera squarely, then slide it to the right. Keep the same face up. Fixed camera.",
      "section": "Appendix F.2",
      "paper_page": 15,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/die/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/die/inputs-2.mp4",
          "poster": "assets/showcase/die/inputs-2.jpg",
          "width": 640,
          "height": 364
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/die/inputs-3.mp4",
          "poster": "assets/showcase/die/inputs-3.jpg",
          "width": 640,
          "height": 364
        }
      ],
      "outputs": [
        {
          "label": "ParForce (H3 Teacher)",
          "src": "assets/showcase/die/videos-1.mp4",
          "poster": "assets/showcase/die/videos-1.jpg",
          "width": 384,
          "height": 218
        }
      ],
      "provenance": {
        "video": "repaired_rigid_slide",
        "native_video_sha256": "bfc1ba12f3a7655037f78b3fca3d8c1067cb4efce49b8107c037390f7afce8c1",
        "source_input_sha256": {
          "first_frame": "92fe7aec03d4da872fc47616e5d32eb9bb3224fadf765d4ea30a1090131e6eab",
          "particle_path": "820d783ccc892360db0bd80b57833025be48ae04bd0290fcfc3780a87318e678",
          "depth_path": "5b611b0db191f8da4d5df99e07e5f3e3da8e3d29d6b79dc25e7a404ee41b8c68"
        },
        "archive_sha256": {
          "inputs-2.jpg": "5a4380d797f139930fcffd1460dda5326c69176283f0bf40832a437685123c9f",
          "inputs-2.mp4": "a57fcb8a3171346823c7c3adf8e085a78a6ac0b4d82e4707e353aa260268c3d0",
          "inputs-3.mp4": "16c888b71f02910fa442cb97d7d6869962dfeeee4ad329ba5c7f9f3f363e870a",
          "videos-1.mp4": "dbdfaeae90c09ac47b456700094ccbcc363ccb95b4d63271d66f561fea7461ed",
          "inputs-1.png": "92fe7aec03d4da872fc47616e5d32eb9bb3224fadf765d4ea30a1090131e6eab",
          "inputs-3.jpg": "bb4ac82f96eda5a32a6f213653740b4275c8541a285a68a499004802f813defe",
          "videos-1.jpg": "7431fd72bbf75d039aa080083bb0bf728a6d5074993503c5405a12ba8311d907"
        }
      }
    },
    {
      "id": "bowling-pins",
      "title": "Bowling pins",
      "prompt": "Initial Scene: White bowling pins are grouped on grass, with some lying down. External Force: Push the upright pin firmly toward the right.",
      "section": "Appendix F.2",
      "paper_page": 15,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/bowling-pins/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/bowling-pins/inputs-2.mp4",
          "poster": "assets/showcase/bowling-pins/inputs-2.jpg",
          "width": 640,
          "height": 360
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/bowling-pins/inputs-3.mp4",
          "poster": "assets/showcase/bowling-pins/inputs-3.jpg",
          "width": 640,
          "height": 360
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/bowling-pins/videos-1.mp4",
          "poster": "assets/showcase/bowling-pins/videos-1.jpg",
          "width": 576,
          "height": 384
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "32bd6a80f6aa5a9fc7a8e671f723335ba7fe1020ba82c6dacdb37663152f777c",
        "archive_sha256": {
          "inputs-1.png": "b647fb0facc493659b6424cfbe25cf0319ddb21dd759e8165c796f9e9a481508",
          "inputs-2.mp4": "aa7ad3c086d231953f033a72699c7051725cf7faced1d203c5e687cadcf281f5",
          "inputs-2.jpg": "d6fb91584ab61615eb109fe276afeaf8f4e1aa875da841343ef1bb3b3de40486",
          "inputs-3.mp4": "ff9a9fcc6ed30b9497317f68ca55523bc33d5e0bdead1ea86b0f771de7a85ff8",
          "inputs-3.jpg": "3a08b58e968c7ac975cfb2b87c82d3c98f961a1fa83a8dc6d1c4e67c32cd3381",
          "videos-1.mp4": "1919022373dd9f567937d1b855d861e50efde70010de2e7bb5eebd7a5723f946",
          "videos-1.jpg": "02fa82161c619af6371ffd6b47b6f92ef3057a71f534367733950f8fcbe1a1ca"
        }
      }
    },
    {
      "id": "paper-cups",
      "title": "Paper cups",
      "prompt": "Initial Scene: Three capped paper cups lie on a desk beside notebooks and pens. External Force: Push the left cup toward the middle cup.",
      "section": "Appendix F.2",
      "paper_page": 15,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/paper-cups/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/paper-cups/inputs-2.mp4",
          "poster": "assets/showcase/paper-cups/inputs-2.jpg",
          "width": 640,
          "height": 338
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/paper-cups/inputs-3.mp4",
          "poster": "assets/showcase/paper-cups/inputs-3.jpg",
          "width": 640,
          "height": 338
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/paper-cups/videos-1.mp4",
          "poster": "assets/showcase/paper-cups/videos-1.jpg",
          "width": 576,
          "height": 384
        }
      ],
      "provenance": {
        "video": "paper_figure_source",
        "native_video_sha256": "8de225188b93053936ece4da823a0d690b7af058fe376784ed2add5b7366b114",
        "archive_sha256": {
          "inputs-1.png": "84b065cb23a6246e27f8f2ce47ae65c0497c2806708b5a4fff99daa6240a2a7c",
          "inputs-2.mp4": "bf2ad82e887edf32fab860844879d24631f2a41ae010d98ad9fc60ea8e5c3c45",
          "inputs-2.jpg": "633604492bb2afa098e964d00b685646b9193298451ce52ef7e78453c472fbc8",
          "inputs-3.mp4": "a6b70628c0c48b1f6f88752b90c51946d5a164f85ffdcf66c23986cdba04bbc8",
          "inputs-3.jpg": "8617ed34fed4f7706010f8f9cd42d83a59868779206745eee18ed1f281d29274",
          "videos-1.mp4": "f6d714ce726211b3ce079b7d3067cc090a68b9ce016d0bd179eedf67457748f7",
          "videos-1.jpg": "fa303afbc7e3b32a21dcc73dab7f9614f9dee5395d3897b99c65ad06f67aa5da"
        }
      }
    },
    {
      "id": "parforce-dominoes",
      "title": "ParForce dominoes",
      "prompt": "Initial Scene: Colored upright dominoes form the word ParForce on a light wooden tabletop.\nExternal Force: Push the upright dominoes from right toward the left. Fixed camera.",
      "section": "Appendix F.2",
      "paper_page": 16,
      "inputs": [
        {
          "label": "Initial frame",
          "src": "assets/showcase/parforce-dominoes/inputs-1.png"
        },
        {
          "label": "Particles (PSS)",
          "src": "assets/showcase/parforce-dominoes/inputs-2.mp4",
          "poster": "assets/showcase/parforce-dominoes/inputs-2.jpg",
          "width": 960,
          "height": 540
        },
        {
          "label": "Surface depth (SDS)",
          "src": "assets/showcase/parforce-dominoes/inputs-3.mp4",
          "poster": "assets/showcase/parforce-dominoes/inputs-3.jpg",
          "width": 960,
          "height": 540
        }
      ],
      "outputs": [
        {
          "label": "ParForce",
          "src": "assets/showcase/parforce-dominoes/videos-1.mp4",
          "poster": "assets/showcase/parforce-dominoes/videos-1.jpg",
          "width": 576,
          "height": 324
        }
      ],
      "provenance": {
        "video": "original_motion_comparison",
        "source_input_sha256": {
          "first_frame": "5143659320f156be799a17bc72e30a7bcdba629c52c88271672bd2a95e6e7110",
          "particle_path": "73e0f779bfacfc5e788c5fa501cde7791f2d802870ed2a1235ecaf58f674174f",
          "depth_path": "2d4311c93e390636cce4c419eb34a3b527f383a3c2434abd7cba4693954fccba"
        },
        "native_video_sha256": "7556a123c0a24728d21f121b029bcd947db21514c0c543348b1a0c1983d5f2b4",
        "clips": [
          {
            "label": "Ours",
            "seed": 130,
            "native_video_sha256": "7556a123c0a24728d21f121b029bcd947db21514c0c543348b1a0c1983d5f2b4",
            "viewport_xywh": [
              0,
              30,
              576,
              324
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "Go-with-the-Track",
            "seed": 42,
            "native_video_sha256": "3dd86ad72a614bc971210c2e3efe176cf81dd4706d0ff236ebd7608bf4d1f331",
            "viewport_xywh": [
              0,
              38,
              832,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "RealWonder",
            "seed": 42,
            "native_video_sha256": "760f10039f82d34bd94a3eff0c3adc0976e4ac92f94019580be7c423ad8a5f25",
            "viewport_xywh": [
              0,
              38,
              832,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "Go-with-the-Flow",
            "seed": 42,
            "native_video_sha256": "96e0d0ab41ccfea00ed13307a671ae3664ffb17c73f000fc920993d43da18693",
            "viewport_xywh": [
              0,
              38,
              720,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          },
          {
            "label": "Tora",
            "seed": 42,
            "native_video_sha256": "83de0471ce3c5bd8955b86a1404a7c4c3557d3ea6c1dfe73bb68113baddd84d8",
            "viewport_xywh": [
              0,
              38,
              720,
              404
            ],
            "display_frames": 90,
            "display_fps": 24
          }
        ],
        "archive_sha256": {
          "inputs-1.png": "5143659320f156be799a17bc72e30a7bcdba629c52c88271672bd2a95e6e7110",
          "inputs-2.jpg": "f4b008d68dfd41b9f4e93490822f863bcc155f83b23a75a50b9031fbcd531644",
          "inputs-2.mp4": "ef737158bb4b4e0f7a75aa95f13c7eb81676d2ecd47bc686329fcba458d9df59",
          "inputs-3.jpg": "edefbc38c2a501188ab3ba727836e98fb5227aacbb61842adedac55fa491b969",
          "inputs-3.mp4": "6e58c63d7388577e551ec78166ef836798da46ef5da3714504ca6b576b7560c5",
          "videos-1.jpg": "e0e2276b8cf66d5425f93f9b683649b9b2d108c7e78893b084457d1fdd81ec1d",
          "videos-1.mp4": "b4bd69f747e3772f080e468ba3d04bd1c1e8c4c88f00d36be9b448b0287f90f7",
          "videos-2.jpg": "482cdd3ae93210a0886a5239e6baf62f5c3050ced4bdf3404a35aa1485554be8",
          "videos-2.mp4": "4aad8c94a2ec393a79d2d00a7bbdd70122c3a94544c29474e723bfd7f6dc3fc2",
          "videos-3.jpg": "f17e2db22c5a1da2b91bffe2613a62cc621102355081f9f2c80ee5f914ad9d34",
          "videos-3.mp4": "64771890663f3dad9bcf7d1d5b50a0ea29b037be97c5d6abef9a8e76fc66d6e6",
          "videos-4.jpg": "18097a5a3bb7463f34273c3575b623a647bc43ce6e586b2763293094f7058bbf",
          "videos-4.mp4": "35ffff59e233c2d8326b43fa62292c0dcd3989d0de5c5388f4637b4bea5ecbaf",
          "videos-5.jpg": "d011eb1188caa2a2f07996982234766277b5f998d17b32569e920894a888076a",
          "videos-5.mp4": "56b224c338a9fbe01b8eabecbc7ea75613435f1a58ce019de4c1b17f67b335ea"
        }
      }
    }
  ]
};
