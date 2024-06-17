using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.UI;
using TMPro;

public class AI_Info : MonoBehaviour
{
    public Rigidbody rb;
    public Animator animator;
    public NavMeshAgent agent;

    public TextMeshProUGUI speedText;
    public TextMeshProUGUI currentAnimText;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
        animator = GetComponent<Animator>();
        agent = GetComponent<NavMeshAgent>();
    }

    
    void Update()
    {
        float speed = agent.velocity.magnitude;

        speedText.text = $"Speed: {speed:F2}";
        AnimatorClipInfo[] currentClips = animator.GetCurrentAnimatorClipInfo(0);
        string currentAnimation = currentClips[0].clip.name;
        currentAnimText.text = $"Animation: {currentAnimation}";
    }
}
