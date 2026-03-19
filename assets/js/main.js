/* =============================================
   프로젝트 데이터 — 여기만 수정하면 돼요!

   thumb: 이모지 문자열 또는 이미지 경로
          이모지 예시: '🚀'
          이미지 예시: 'images/project1.png'
   thumbBg: 이미지 없을 때 배경색
============================================= */
const PROJECTS = {
  p1: {
    title: '프로젝트명 1',
    period: '20XX.XX ~ 20XX.XX',
    thumb: '🚀',
    thumbBg: '#EFF4FF',
    tags: ['기술1', '기술2', '기술3'],
    desc: '프로젝트 상세 설명을 입력하세요. 어떤 문제를 해결했는지, 본인의 역할은 무엇이었는지, 어떤 성과가 있었는지 자유롭게 작성해 주세요.',
  },
  p2: {
    title: '프로젝트명 2',
    period: '20XX.XX ~ 20XX.XX',
    thumb: '💡',
    thumbBg: '#F0FDF4',
    tags: ['기술1', '기술2'],
    desc: '프로젝트 상세 설명을 입력하세요.',
  },
  p3: {
    title: '프로젝트명 3',
    period: '20XX.XX ~ 20XX.XX',
    thumb: '🎯',
    thumbBg: '#FFF7ED',
    tags: ['기술1', '기술2', '기술3'],
    desc: '프로젝트 상세 설명을 입력하세요.',
  },
  p4: {
    title: '프로젝트명 4',
    period: '20XX.XX ~ 20XX.XX',
    thumb: '🌱',
    thumbBg: '#FDF4FF',
    tags: ['기술1', '기술2'],
    desc: '프로젝트 상세 설명을 입력하세요.',
  },
};

/* ── 모달 ── */
function openModal(id) {
  const p = PROJECTS[id];
  const thumb = document.getElementById('m-thumb');

  const isImage = p.thumb.startsWith('images/') || p.thumb.startsWith('http') || p.thumb.endsWith('.png') || p.thumb.endsWith('.jpg') || p.thumb.endsWith('.jpeg') || p.thumb.endsWith('.webp');

  if (isImage) {
    thumb.innerHTML = `<img src="${p.thumb}" alt="${p.title}">`;
    thumb.style.background = '';
  } else {
    thumb.innerHTML = `<span class="modal-thumb-emoji">${p.thumb}</span>`;
    thumb.style.background = p.thumbBg;
  }

  document.getElementById('m-title').textContent = p.title;
  document.getElementById('m-period').textContent = p.period;
  document.getElementById('m-tags').innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  document.getElementById('m-desc').textContent = p.desc;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});

/* ── 스크롤 fade-in ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'none';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('section:not(#hero)').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  io.observe(el);
});
