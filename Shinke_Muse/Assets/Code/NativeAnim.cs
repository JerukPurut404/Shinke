using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class NativeAnim : MonoBehaviour
{
    public Rigidbody rb;
    public Animator animator;
    public NavMeshAgent agent;

    void Start()
    {
        rb = GetComponent<Rigidbody>();
       agent = GetComponent<NavMeshAgent>();
    }

    void Update()
    {
        
       float speed = agent.velocity.magnitude;

       
        if (speed >= 0.3)
        {
            animator.SetBool("Walk", true);
        }
        else
        {
            animator.SetBool("Walk", false);
        }

       

    }
}
